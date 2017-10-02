
//URL: https://www.codewars.com/kata/pick-peaks/train/javascript
//kyu: 4


const pickPeaks = (arr) => {
    let output = {pos:[], peaks:[]}
    let highest = [];
    for (i = 0; i < arr.length; i++) {
        if (i > 0 && arr[i-1] < arr[i] && arr[i+1] < arr[i]) {
            output.pos.push(i)
            output.peaks.push(arr[i])
        } else if (arr[i+1] === arr[i] && arr[i-1] < arr[i] && !highest.length) {
            highest.push(i)
            highest.push(arr[i])
            for (j = i; j < arr.length; j++) {
                if (arr[j] === highest[1] && arr[j+1] > arr[j]) {
                    highest = [];
                    break;
                }
                if (arr[j] === highest[1] && arr[j+1] < arr[j]) {
                    output.pos.push(highest[0])
                    output.peaks.push(highest[1])
                    highest = [];
                }
            }
        }
    }
    return output;
}




console.log(pickPeaks([0, 1, 2, 5, 1, 0]), {pos:[3], peaks:[5]})
console.log(pickPeaks([3,2,3,6,4,1,2,3,2,1,2,3]),{pos:[3,7],peaks:[6,3]})
console.log(pickPeaks([1,2,2,2,1]), {pos:[1], peaks:[2]})
console.log(pickPeaks([ 1, 2, 5, 4, 3, 2, 3, 6, 4, 1, 2, 3, 3, 4, 5, 3, 2, 1, 2, 3, 5, 5, 4, 3 ]),
{ pos: [ 2, 7, 14, 20 ], peaks: [ 5, 6, 5, 5 ] })