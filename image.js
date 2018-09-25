
let compact = (matrix) => {
    let lines = matrix.length;
    let columns = matrix[0].length;
    let matrixCompact = [];
    let pointer, numOfBlack, numOfWhite;
    for (let i = 0; i < lines; i++) {
        pointer = 0;
        numOfBlack = 0;
        numOfWhite = 0;
        matrixCompact[i] = [];
        for (let j = 0; j < columns; j++) {
            if (j === 0) {
                if (matrix[i][j] === 0) {
                    matrixCompact[i][pointer] = 0;
                    pointer++;
                    numOfBlack++;
                } else {
                    numOfWhite++;
                }
            }
            else {
                if (matrix[i][j] === 0) {
                    if (matrix[i][j - 1] === 1) {
                        matrixCompact[i][pointer] = numOfWhite;
                        numOfWhite = 0;
                        numOfBlack++;
                        pointer++;
                    } else {
                        numOfBlack++;
                        if(j===columns -1){
                            matrixCompact[i][pointer] = numOfBlack;
                        }
                    }
                } else {
                    if (matrix[i][j - 1] === 0) {
                        matrixCompact[i][pointer] = numOfBlack;
                        numOfBlack = 0;
                        numOfWhite++;
                        pointer++;
                    } else {
                        numOfWhite++;
                        if(j===columns-1){
                            matrixCompact[i][pointer] = numOfWhite;
                        }
                    }
                }
            }
        }
    }
    return matrixCompact;
};

exports = module.exports = {
    compact: compact
};