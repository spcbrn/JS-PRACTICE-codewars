
//URL: https://www.codewars.com/kata/find-the-odd-int/train/javascript
//kyu: 6


function findOdd(a) {
    let int = 0
    a.forEach((c, i) => {
        let count = 0;
        a.forEach(cc => {
            if (cc === c) {
                count++
            }
        })
        if (count % 2 !== 0) {
            int = c;
            return;
        }
    })
    return int;
}








console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]), 5);
console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]), -1);
console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]), 5);
console.log(findOdd([10]), 10);
console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1]), 10);
console.log(findOdd([5,4,3,2,1,5,4,3,2,10,10]), 1);