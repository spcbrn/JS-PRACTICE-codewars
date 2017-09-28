
//URL: https://www.codewars.com/kata/snail/train/javascript
//kyu: 4


let array = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

let array2 = [
    [1,2,3,4],
    [5,6,7,8],
    [9,8,7,6],
    [5,4,3,2]
];

let snail = function(a) {
    let final = [];
    let tickRow = 0;
    let tickCol = 0;
    while (final.length < Math.pow(a[0].length, 2)) {
        if (final.length < a.length) {
            final.push(a[0][1]);
            tickRow++;
        }
    }
    console.log(final)
    return final;
}





  console.log(snail(array), [1,2,3,6,9,8,7,4,5])
  console.log(snail(array2), [1,2,3,4,8,6,2,3,4,5,9,5,6,7,7,8])