
//URL: https://www.codewars.com/kata/collatz-conjecture-3n-plus-1/javascript
//kyu: 8


const hotpo = (n, c) => {
  let count = c ? c : 0;
  if (n === 0) return 0;
  if (n === 1) return count;
  if (n % 2) {
    count++;
    return hotpo((3*n + 1), count);
  } else {
    count++
    return hotpo((n/2), count);
  }
} 

const hotpo = (n, c=0) => n <= 1 ? c : hotpo(n % 2 ? 3*n+1 : n/2, c++)


console.log(hotpo(1), 0);
console.log(hotpo(5), 5);
console.log(hotpo(6), 8);
console.log(hotpo(23), 15);
