let zip = (mat) => {
    var compressed = [];
    
    mat.forEach(row => {
       var running_element = 1;
        var current_count = 0;
        var new_row = [];
        
        row.forEach(element => {
            if (element !== running_element) {
                new_row.push(current_count);
                current_count = 1;
                running_element = element;
            } else {
                current_count += 1;
            }
        });
        
        new_row.push(current_count);
        compressed.push(new_row);
    });
    
    return compressed;
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
