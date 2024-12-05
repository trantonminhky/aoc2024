const fs = require("fs");

const input = fs.readFileSync("./d1.txt", {encoding: "utf-8"});
const inputArr = input.split('\n').map(el => el.split("   ")).slice(0, 1000);

const list1 = inputArr.map(arr => parseInt(arr[0]));
const list2 = inputArr.map(arr => parseInt(arr[1]));

list1.sort((a, b) => a - b);
list2.sort((a, b) => a - b);

let freq = {};
for (const num of list2) {
    if (!freq[num.toString()]) {
        freq[num.toString()] = 0;
    }

    freq[num.toString()]++;
}

let sum = 0;
for (const num of list1) {
    if (!freq[num.toString()]) continue;
    sum += freq[num.toString()] * num;
}

console.log(sum);