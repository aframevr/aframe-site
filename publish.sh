#!/bin/bash

rm -rf ./node_modules
git reset --hard HEAD
git pull --rebase origin master
npm install --ignore-scripts --include=dev
npm run bumpdocs
npm run generate
cd ../aframevr.github.io
git reset --hard HEAD
git pull --rebase origin master
rm -rf ./*
cp -r ../aframe-site/public/* ./
git add -A .
git commit -m "Bump Site"
git push origin master
cd -
