const fs = require("fs");

const input = fs.readFileSync("./d4.txt", {encoding: "utf-8"});
const inputMatrix = input.split('\n').map(row => row.split('').slice(0, -1));

const length = inputMatrix[0].length;
const width = inputMatrix.length;

console.log(length);
console.log(width);

let xmas = 0;


for (let y = 0; y <= width; y++) {
    for (let x = 0; x <= length; x++) {
        const uldr = [inputMatrix[y-1]?.[x-1], inputMatrix[y]?.[x], inputMatrix[y+1]?.[x+1]].join('');
        const drul = [inputMatrix[y+1]?.[x+1], inputMatrix[y]?.[x], inputMatrix[y-1]?.[x-1]].join('');
        const urdl = [inputMatrix[y-1]?.[x+1], inputMatrix[y]?.[x], inputMatrix[y+1]?.[x-1]].join('');
        const dlur = [inputMatrix[y+1]?.[x-1], inputMatrix[y]?.[x], inputMatrix[y-1]?.[x+1]].join('');

        if ((uldr === 'MAS' || drul === 'MAS') && (urdl == 'MAS' || dlur == 'MAS')) {
            xmas++;
        }
    }
}

console.log(xmas);