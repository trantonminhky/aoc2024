const fs = require("fs");

const input = fs.readFileSync("./d2.txt", {encoding: "utf-8"});
const reportsStr = input.split('\n').map(report => report.split(' '));
const reports = reportsStr.map(report => report.map(level => parseInt(level)));

let safeCount = 0;
for (const report of reports) {
    let prevLevel = report[0];
    let safe = true;
    let isAscending = (report[1] - report[0] > 0) ? true : false;
    for (let i = 1; i < report.length; i++) {
        if (isAscending && (report[i] - prevLevel > 3 || report[i] - prevLevel < 1)) {
            safe = false;
            break;
        } else if (!isAscending && (prevLevel - report[i] > 3 || prevLevel - report[i] < 1)) {
            safe = false;
            break;
        }
        prevLevel = report[i];
    }
    if (safe) safeCount++;
}

console.log(safeCount);