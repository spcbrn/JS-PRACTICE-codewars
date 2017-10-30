
//URL: https://www.codewars.com/kata/sum-of-prime-indexed-elements
//kyu: 


const total = (a) => {
    const isPrime = (n) => {
        n = n < 0 ? n*-1 : n;
        for (i=2; i<n; i++) {
          if (n % i === 0) {
            return false;
          }
        }
        return n === 0 ? false : n < 2 ? false : true;
    }
    let sum = 0;
    a.forEach((c,i) => {
        if (isPrime(i)) {
            sum += c;
        }
    })
    return sum;
}



console.log(total([]),0);
console.log(total([1,2,3,4]),7);
console.log(total([1,2,3,4,5,6]),13);
console.log(total([1,2,3,4,5,6,7,8]),21);
console.log(total([1,2,3,4,5,6,7,8,9,10,11]),21);
console.log(total([1,2,3,4,5,6,7,8,9,10,11,12,13]),33);
console.log(total([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]),47);