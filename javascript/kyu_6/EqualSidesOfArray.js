
//URL: https://www.codewars.com/kata/equal-sides-of-an-array
//kyu: 6


const findEvenIndex = arr => {
    if (!arr.length) return 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr.slice(0, i+1).reduce((a, b) => a + b) === arr.slice(i).reduce((a, b) => a + b)) return i;
    }
    return -1;
}


console.log(findEvenIndex([1,2,3,4,3,2,1]),3);
console.log(findEvenIndex([1,100,50,-51,1,1]),1);
console.log(findEvenIndex([1,2,3,4,5,6]),-1);
console.log(findEvenIndex([20,10,30,10,10,15,35]),3);