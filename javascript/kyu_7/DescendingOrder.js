
//URL: http://www.codewars.com/kata/descending-order
//kyu: 7


const descendingOrder = (n) => {
    return parseInt(n.toString().split('').sort((a,b)=>a<b).join(''));
}


console.log(descendingOrder(0), 0)
console.log(descendingOrder(1), 1)
console.log(descendingOrder(123456789), 987654321)  