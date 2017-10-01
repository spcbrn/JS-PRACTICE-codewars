
//URL: https://www.codewars.com/kata/make-a-spiral
//kyu: 3


let spiralize = function(size) {
    let output = [];
    for (n = 0; n < size; n++) {
        output.push([])
        for (o = 0; o < size; o++) {
            output[n].push(0)
        }
    }
    let level = 0;
    let inc = 1;
    while (level < Math.ceil(size/2)) {
        for (i = level; i < size; i++) {
            if (i === level) {
                for (j = level; j < size - level; j++) {
                    if (j === level && level > 0) {
                        output[i][j-1] = 1
                    }
                    output[i][j] = 1 
                }
            }
            if (i > level && i < size-level) {
                output[i][size-level-1] = 1
            }
        }
        for (l = size - 1 - level; l > 1; l--) {
            if (l === size - 1 - level) {
                for (m = size-(2+level); m > level; m--) {
                        output[l][m] = 1
                }
            }
            if (l > level + 1) {
                output[l][level] = 1
            } 
        }
        level+=2
        
    }
    return output;
}


console.log(spiralize(20))
// console.log(spiralize(10))