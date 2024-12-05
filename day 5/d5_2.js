const fs = require("fs");

const rules = fs.readFileSync("./d5_rules.txt", {encoding: "utf-8"}).split('\n').map(rule => rule.split('|').map(num => parseInt(num)));
const updates = fs.readFileSync("./d5_updates.txt", {encoding: "utf-8"}).split('\n').map(update => update.split(',').map(num => parseInt(num)));

let incorrectUpdates = [];
let sum = 0;

for (const update of updates) {
    let valid = true;

    while (true) {
        let _valid = true;

        for (let updateIndex = 0; updateIndex < update.length; updateIndex++) {
            for (const rule of rules) {

                if (rule[0] === update[updateIndex] && update.slice(0, updateIndex).includes(rule[1])) {
                    const wrongIndex = update.indexOf(rule[1]);
                    update.splice(wrongIndex, 1);
                    update.splice(updateIndex, 0, rule[1]);
                    valid = false;
                    _valid = false;
                    break;
                }
    
                if (rule[1] === update[updateIndex] && update.slice(updateIndex + 1).includes(rule[0])) {
                    const wrongIndex = update.indexOf(rule[0]);
                    update.splice(wrongIndex, 1);
                    update.splice(updateIndex, 0, rule[0]);
                    valid = false;
                    _valid = false;
                    break;
                }
            }
        }

        if (_valid) break;
    }

    if (!valid) {
        incorrectUpdates.push(update);
    }
}

for (const incorrectUpdate of incorrectUpdates) {
    let middleUpdateNum = incorrectUpdate[(incorrectUpdate.length - 1) / 2];
    console.log(incorrectUpdate.join(' '));
    sum += middleUpdateNum;
}

console.log(sum);