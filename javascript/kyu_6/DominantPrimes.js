
//URL: https://www.codewars.com/kata/dominant-primes/
//kyu: 6


const solve = (a, b) => {
    let arr = [];
    for (i=a; i<=b; i++) {
        arr.push(i);
    }
    const isPrime = (n) => {
        for (i=2; i<n; i++) {
          if (n % i === 0) {
            return false;
          }
        }
        return n === 0 ? false : n < 2 ? false : true;
    }
    let sum = 0;
    arr.forEach((c,i) => {
        if (isPrime(i)) {
            sum += c;
        }
    })
    return sum;
}



console.log(solve(0,10),8);
console.log(solve(2,200),1080);
console.log(solve(200,2000),48132);
console.log(solve(500,10000),847039);
console.log(solve(4000,450000),806250440);