
//URL: https://www.codewars.com/kata/convert-integer-to-binary
//kyu: 7


const toBinary = (n) => {
    return (n >>> 0).toString(2);
}


console.log(toBinary(2),"10")
console.log(toBinary(3),"11")
console.log(toBinary(4),"100")
console.log(toBinary(5),"101")