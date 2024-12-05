const fs = require("fs");

const input = fs.readFileSync("./d2.txt", {encoding: "utf-8"});
const reportsStr = input.split('\n').map(report => report.split(' '));
const reports = reportsStr.map(report => report.map(level => parseInt(level)));

function isSafe(report, index) {
    let reportPopped = []

    if (index !== null) {
        for (let j = 0; j < report.length; j++) {
            if (j !== index) {
                reportPopped.push(report[j]);
            }
        }
    }

    let prevLevel = reportPopped[0];
    let isAscending = (reportPopped[1] - reportPopped[0] > 0) ? true : false;

    for (let i = 1; i < reportPopped.length; i++) {
        if (isAscending && (reportPopped[i] - prevLevel > 3 || reportPopped[i] - prevLevel < 1)) {
            return false;
        } else if (!isAscending && (prevLevel - reportPopped[i] > 3 || prevLevel - reportPopped[i] < 1)) {
            return false;
        }
        prevLevel = reportPopped[i];
    }
    return true;
}

let safeCount = 0;
for (const report of reports) {
    if (isSafe(report)) {
        safeCount++;
        continue;
    } else {
        let safeDampened = false;
        for (let levelIndex = 0; levelIndex < report.length; levelIndex++) {
            if (isSafe(report, levelIndex)) {
                safeDampened = true;
                break;
            }
        }

        if (safeDampened) safeCount++;
    }
}

console.log(safeCount);