
//URL: https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec
//kyu: 6


const persistence = (n) => {
  let steps = 0;
  while (n >= 10) {
    n = n.toString().split('').reduce((a,b) => a*b);
    steps++;
  }
  return steps;
}



console.log(persistence(39),3);
console.log(persistence(4),0);
console.log(persistence(25),2);
console.log(persistence(999),4);
