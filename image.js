let zip = (matrix) => {
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
                        if (j === columns - 1) {
                            matrixCompact[i][pointer] = numOfBlack;
                        }
                    } else {
                        numOfBlack++;
                        if(j===columns -1){
                            matrixCompact[i][pointer] = numOfBlack;
                        }
                    }
                } else {
                    if (matrix[i][j - 1] === 0 && j!==1) {
                        matrixCompact[i][pointer] = numOfBlack;
                        numOfBlack = 0;
                        numOfWhite++;
                        pointer++;
                        if (j === columns - 1) {
                            matrixCompact[i][pointer] = numOfWhite;
                        }
                    } else {
                        numOfWhite++;
                        if (j === columns - 1) {
                            matrixCompact[i][pointer] = numOfWhite;
                        }
                    }
                }
            }
        }
    }
    return matrixCompact;
};

var unzip = (matrixCompact) => {
    let matrix = [];
    let lines = matrixCompact.length;
    let columns = matrixCompact[0].length;
    let pointer;
    for (let i = 0; i < lines; i++) {
        pointer = 0;
        matrix[i] = [];
        for (let j = 0; j < columns; j++) {
            let value = matrixCompact[i][j]
            for (let k = 1; k <=value; k++) {
                if(j%2===0){
                    matrix[i][pointer]=1;
                }else{
                    matrix[i][pointer]=0;
                }
                pointer++;
            }
        }
    }
    return matrix;
};



exports = module.exports = {
    zip: zip,
    unzip:unzip
};