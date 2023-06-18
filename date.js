#!/usr/bin/env node
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

const currDate = new Date();
const args = yargs(hideBin(process.argv)).argv;
const year = new Date().getFullYear();
const month = new Date().getMonth();
const day = new Date().getDate();
const inputYear = args.year || args.y;
const inputMonth = args.month || args.m;
const inputDay = args.date || args.d;

let responce;

if (inputYear) {
  responce = year;
} else if (inputMonth) {
  responce = month + 1;
} else if (inputDay) {
  responce = day;
} else {
  responce = currDate.toISOString();
}

if (args._.includes("add") || args._.includes("sub")) {
  if (args._.includes("add")) {
    inputYear && currDate.setFullYear(year + inputYear);
    inputMonth && currDate.setMonth(month + inputMonth);
    inputDay && currDate.setDate(day + inputDay);
  } else if (args._.includes("sub")) {
    inputYear && currDate.setFullYear(year - inputYear);
    inputMonth && currDate.setMonth(month - inputMonth);
    inputDay && currDate.setDate(day - inputDay);
  }
  console.log(currDate.toISOString());
} else {
  console.log(responce);
}
