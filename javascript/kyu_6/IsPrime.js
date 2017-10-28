
//URL: https://www.codewars.com/kata/is-a-number-prime
//kyu: 6


const isPrime = (n) => {
    n = n < 0 ? n*-1 : n;
    for (i=2; i<n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return n === 0 ? false : n < 2 ? false : true;
}


console.log(isPrime(0), false);
console.log(isPrime(1), false);
console.log(isPrime(2), true);
console.log(isPrime(-7), true);
console.log(isPrime(6), false);