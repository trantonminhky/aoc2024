const fs = require("fs");

const input = fs.readFileSync("./d1.txt", {encoding: "utf-8"});
const inputArr = input.split('\n').map(el => el.split("   "));

const list1 = inputArr.map(arr => parseInt(arr[0]));
const list2 = inputArr.map(arr => parseInt(arr[1]));


const list1Sorted = list1.sort((a, b) => a - b);
const list2Sorted = list2.sort((a, b) => a - b);

let sum = 0;
for (let i = 0; i < list1Sorted.length - 1; i++) {
    const diff = (list1Sorted[i] - list2Sorted[i] > 0) ? (list1Sorted[i] - list2Sorted[i]) : (list2Sorted[i] - list1Sorted[i])
    sum += diff;
}

console.log(sum);