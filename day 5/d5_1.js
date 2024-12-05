const fs = require("fs");

const rules = fs.readFileSync("./d5_rules.txt", {encoding: "utf-8"}).split('\n').map(rule => rule.split('|').map(num => parseInt(num)));
const updates = fs.readFileSync("./d5_updates.txt", {encoding: "utf-8"}).split('\n').map(update => update.split(',').map(num => parseInt(num)));

let sum = 0;

for (const update of updates) {
    let valid = true;
    let middleUpdateNum = update[(update.length - 1) / 2];

    for (let updateIndex = 0; updateIndex < update.length; updateIndex++) {
        for (const rule of rules) {
            if (rule[0] === update[updateIndex] && update.slice(0, updateIndex).includes(rule[1])) {
                valid = false;
                break;
            }

            if (rule[1] === update[updateIndex] && update.slice(updateIndex).includes(rule[0])) {
                valid = false;
                break;
            }
        }

        if (!valid) {
            break;
        }
    }

    if (valid) {
        sum += middleUpdateNum;
    }
}

console.log(sum);