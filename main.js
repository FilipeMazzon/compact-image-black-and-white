const randomMatrix = require('./randomMatrix');
const image = require('./image');
const lines = process.env.LINES || 5;
const columns = process.env.COLUMNS || 6;

let matrix = randomMatrix.generate(0,2,lines,columns);//0 is the first value, 2 is because 2 don't enter and 1 enter.
console.log(matrix);
let compactMatrix = image.compact(matrix);

console.log(compactMatrix);
