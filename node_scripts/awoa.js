/**
 * Start A Week of A-Frame from template.
 */
const fs = require('fs');
const Moment = require('moment');
const templateString = require('es6-template-strings');

// Get template.
const template = fs.readFileSync('node_scripts/templates/awoa.md', 'utf-8');
const templateContext = {};

// Get week number.
const awoaPosts = fs.readdirSync('src/_posts').filter(file => file.indexOf('awoa') === 0);
const lastWeekPost = awoaPosts.sort().reverse()[0];
templateContext.weekNumber = parseInt(lastWeekPost.split('awoa-')[1].split('.md')[0], 10) + 1;

// Get dates.
const currentDate = new Moment();
const currentDay = currentDate.day();
const daysFromFriday = 5 - currentDay;
currentDate.add(daysFromFriday, 'days');
const fromDate = currentDate.clone().subtract(1, 'week');
templateContext.fromDate = fromDate.format('Y-M-D');
templateContext.toDate = currentDate.format('Y-M-D');

// Write file.
const content = templateString(template, templateContext);
fs.writeFileSync(`src/_posts/awoa-${templateContext.weekNumber}.md`, content);
console.log(`src/_posts/awoa-${templateContext.weekNumber}.md successfully created.`);
