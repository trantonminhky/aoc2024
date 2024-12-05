const fs = require("fs");

function isNumeric(value) {
    return /^-?\d+$/.test(value);
}

const corruptedMem = fs.readFileSync("./d3.txt", {encoding: "utf-8"});
let sum = 0;
let mul = false;
let param;

for (let charIndex = 0; charIndex < corruptedMem.length - 3; charIndex++) {
    if ([corruptedMem[charIndex], corruptedMem[charIndex + 1], corruptedMem[charIndex + 2], corruptedMem[charIndex + 3]].join('') === 'mul(') {
        mul = true;
    } else {
        mul = false;
        continue;
    }

    if (mul) {
        for (let charMulIndex = charIndex + 4; charMulIndex < corruptedMem.length; charMulIndex++) {
            if (corruptedMem[charMulIndex] == ')') {
                param = corruptedMem.substring(charIndex + 4, charMulIndex);
                let _param = param.split(',');
                
                if (_param.length !== 2) break;
                if (!_param.map(p => isNumeric(p)).every(Boolean)) break;

                const realParam = _param.map(p => parseInt(p));

                if (Math.log10(realParam[0]) >= 3) break;

                sum += (realParam[0] * realParam[1]);

                console.log(sum);
                break;
            }
        }
    }
}