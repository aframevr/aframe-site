#!/usr/bin/env node
'use strict';

// Replacement for `multidep multidep.json && npm run copydocs`.
// Instead of running `npm install` for every aframe version (which pulls all
// dependencies into a ~1.1 GB .multidep tree), this script downloads only
// the docs/ folder from each version via GitHub/npm tarballs directly into
// src/docs/<version>/.
//
// Versions 0.1.0 and 0.2.0 don't have docs-v* branches; 0.2.0 is fetched
// from the npm registry tarball, and 0.1.0 is skipped (docs committed
// directly in the repo at src/docs/0.1.0/).

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const GITHUB_TARBALL_BRANCH = 'https://github.com/aframevr/aframe/archive/refs/heads';
const DEST_DIR = 'src/docs';

const specPath = process.argv[2] || 'multidep.json';
const spec = JSON.parse(fs.readFileSync(specPath, 'utf8'));
const versions = spec.versions.aframe;

function run(cmd) {
  execSync(cmd, { stdio: 'inherit' });
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

// Extract version and branch from a multidep.json entry.
function parseEntry(entry) {
  if (Array.isArray(entry)) {
    return { version: entry[1], branch: entry[0].split('#')[1] };
  }
  return { version: entry, branch: null };
}

// Always re-fetch a branch: delete existing dest, download fresh.
function fetchBranch(branch, dest) {
  if (fs.existsSync(dest)) {
    fs.rmSync(dest, { recursive: true });
  }
  ensureDir(dest);
  console.log(`Fetching ${branch} docs from GitHub tarball ...`);
  const prefix = `aframe-${branch}`;
  run(
    `curl -sL ${GITHUB_TARBALL_BRANCH}/${branch}.tar.gz ` +
    `| tar xz --strip-components=2 -C "${dest}" "${prefix}/docs"`,
  );
  console.log(`  -> ${dest}`);
}

function main() {
  ensureDir(DEST_DIR);

  // Find the latest versioned entry (last array entry with a branch).
  let latestBranch = null;
  let latestVersion = null;
  for (let i = versions.length - 1; i >= 0; i--) {
    const { version, branch } = parseEntry(versions[i]);
    if (branch) {
      latestBranch = branch;
      latestVersion = version;
      break;
    }
  }

  for (const entry of versions) {
    const { version, branch } = parseEntry(entry);

    // 0.1.0 docs are committed directly in the repo (src/docs/0.1.0/).
    if (version === '0.1.0') continue;

    const dest = path.join(DEST_DIR, version);

    // Always re-fetch the latest versioned branch (may have cherry-picks).
    if (version === latestVersion) {
      fetchBranch(branch, dest);
      continue;
    }

    // Skip if already downloaded.
    if (fs.existsSync(dest)) {
      console.log(`aframe ${version}: already exists`);
      continue;
    }

    ensureDir(dest);
    if (branch) {
      // Fetch docs from a GitHub branch tarball.
      console.log(`Fetching ${branch} docs from GitHub tarball ...`);
      const prefix = `aframe-${branch}`;
      run(
        `curl -sL ${GITHUB_TARBALL_BRANCH}/${branch}.tar.gz ` +
        `| tar xz --strip-components=2 -C "${dest}" "${prefix}/docs"`,
      );
    } else {
      // Plain version string (e.g. "0.2.0") — fetch from npm registry.
      console.log(`Fetching aframe@${version} docs from npm registry ...`);
      run(
        `curl -sL https://registry.npmjs.org/aframe/-/aframe-${version}.tgz ` +
        `| tar xz --strip-components=2 -C "${dest}" package/docs`,
      );
    }
    console.log(`  -> ${dest}`);
  }

  // Fetch master docs from GitHub (always re-fetch to get the latest).
  fetchBranch('master', path.join(DEST_DIR, 'master'));
}

main();
