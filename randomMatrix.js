function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

let generateRandonMatrix = (min,max,numberOfLines,numberOfColumns) => {
    let matrixAux=[];
    for(let i=0;i<numberOfLines;i++){
        matrixAux[i] = [];
        for(let j=0;j<numberOfColumns;j++){
            matrixAux[i][j] = getRandomInt(min,max);
        }
    }
    return matrixAux;
};

exports = module.exports = {
    generate: generateRandonMatrix
};