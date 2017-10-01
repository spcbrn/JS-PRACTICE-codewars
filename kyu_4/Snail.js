
//URL: https://www.codewars.com/kata/snail/train/javascript
//kyu: 4


let array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let array2 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 8, 7, 6],
    [5, 4, 3, 2]
];

let snail = function(a) {
    let output = [];
    let tick = 0;
    let depth = a.length;
    while (tick < Math.ceil(a.length/2)) {
        for (i = tick; i < depth; i++) {
            if (i === tick) {
                for (j = tick; j < a[i].length - tick; j++) {
                    output.push(a[i][j]); 
                }
            }
            if (i > tick) {
                output.push(a[i][depth-1])
            }
        }
        for (l = depth - 1; l > tick; l--) {
            if (l === depth - 1) {
                for (m = a[l].length-(2+tick); m >= tick; m--) {
                    output.push(a[l][m]);
                }
            }
            if (l < depth - 1) {
                output.push(a[l][tick]);
            }
        }
        tick++;
        depth--;
    }
    return output;
}




console.log(snail(array), [1, 2, 3, 6, 9, 8, 7, 4, 5])
console.log(snail(array2), [1, 2, 3, 4, 8, 6, 2, 3, 4, 5, 9, 5, 6, 7, 7, 8])