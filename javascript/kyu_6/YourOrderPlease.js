
//URL: https://www.codewars.com/kata/your-order-please
//kyu: 6

//first solution, multi line:
// const order = str => {
//     let hash = {};
//     str.split(' ').forEach(c => hash[c.match(/\d/)] = c)
//     return Object.keys(hash).map(c => hash[c]).join(' ');
// }

//single line solution:
const order = str => str.split(' ').sort((a, b) => a.match(/\d/) - b.match(/\d/)).join(' ');


console.log(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est")
console.log(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople")
console.log(order(""), "")