
//URL: https://www.codewars.com/kata/playing-with-digits/
//kyu: 6


const digPow = (p, n) => {
    let k = 1;
    let sum = 0;
    p.toString().split('').forEach(c => {
        sum += Math.pow(c, n);
        n++
    })
    return sum % p ? -1 : sum / p;
}



console.log(digPow(89, 1), 1)
console.log(digPow(92, 1), -1)
console.log(digPow(46288, 3), 51)