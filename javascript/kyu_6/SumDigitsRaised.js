
//URL: https://www.codewars.com/kata/take-a-number-and-sum-its-digits-raised-to-the-consecutive-powers-and-dot-dot-dot-eureka
//kyu: 6


const sumDigPow = (a, b) => {
    let output = [];
    for (i=a; i<=b; i++) {
        let digs = i.toString().split('')
        let sum = 0;
        if (i < 10) {
            output.push(i);
        } else {
            digs.forEach((c,j) => {
                sum += Math.pow(c, j+1)
            })
            if (sum === i) {
                output.push(i)
                sum = 0;
            }
        }
    }
    return output
}


console.log(sumDigPow(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log(sumDigPow(1, 100), [1, 2, 3, 4, 5, 6, 7, 8, 9, 89])
console.log(sumDigPow(10, 100),  [89])
console.log(sumDigPow(90, 100), [])
console.log(sumDigPow(90, 150), [135])
console.log(sumDigPow(50, 150), [89, 135])
console.log(sumDigPow(10, 150), [89, 135])