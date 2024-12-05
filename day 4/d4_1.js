const fs = require("fs");

const input = fs.readFileSync("./d4.txt", {encoding: "utf-8"});
const inputMatrix = input.split('\n').map(row => row.split('').slice(0, -1));

const length = inputMatrix[0].length;
const width = inputMatrix.length;

console.log(length);
console.log(width);

let u = 0;
let d = 0;
let l = 0;
let r = 0;
let ul = 0;
let ur = 0;
let dl = 0;
let dr = 0;


for (let y = 0; y <= width; y++) {
    for (let x = 0; x <= length; x++) {
        const _r = [inputMatrix[y]?.[x], inputMatrix[y]?.[x+1], inputMatrix[y]?.[x+2], inputMatrix[y]?.[x+3]].join('');
        const _l = [inputMatrix[y]?.[x], inputMatrix[y]?.[x-1], inputMatrix[y]?.[x-2], inputMatrix[y]?.[x-3]].join('');
        const _d = [inputMatrix[y]?.[x], inputMatrix[y+1]?.[x], inputMatrix[y+2]?.[x], inputMatrix[y+3]?.[x]].join('');
        const _u = [inputMatrix[y]?.[x], inputMatrix[y-1]?.[x], inputMatrix[y-2]?.[x], inputMatrix[y-3]?.[x]].join('');
        const _ul = [inputMatrix[y]?.[x], inputMatrix[y-1]?.[x-1], inputMatrix[y-2]?.[x-2], inputMatrix[y-3]?.[x-3]].join('');
        const _ur = [inputMatrix[y]?.[x], inputMatrix[y-1]?.[x+1], inputMatrix[y-2]?.[x+2], inputMatrix[y-3]?.[x+3]].join('');
        const _dl = [inputMatrix[y]?.[x], inputMatrix[y+1]?.[x-1], inputMatrix[y+2]?.[x-2], inputMatrix[y+3]?.[x-3]].join('');
        const _dr = [inputMatrix[y]?.[x], inputMatrix[y+1]?.[x+1], inputMatrix[y+2]?.[x+2], inputMatrix[y+3]?.[x+3]].join('');

        if (_r === 'XMAS') r++;
        if (_l === 'XMAS') l++;
        if (_d === 'XMAS') d++;
        if (_u === 'XMAS') u++;
        if (_ul === 'XMAS') ul++;
        if (_ur === 'XMAS') ur++;
        if (_dl === 'XMAS') dl++;
        if (_dr === 'XMAS') dr++;
    }
}

console.log(u + d + l + r + ul + ur + dl + dr);