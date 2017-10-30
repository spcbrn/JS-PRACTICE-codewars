
//URL: https://www.codewars.com/kata/factorial-length
//kyu: 6


const count = (n) => {

    return Math.floor(Math.log10(n))+1
}

console.log(50000*4.26474)

console.log(count(5),3);
console.log(count(50),65);
console.log(count(500),1135);
console.log(count(5000),16326);
console.log(count(50000),213237);
console.log(count(500000),2632342);
console.log(count(5000000),31323382);
console.log(count(50000000),363233781);