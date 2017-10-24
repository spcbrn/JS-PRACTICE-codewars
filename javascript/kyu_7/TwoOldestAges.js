
//URL: https://www.codewars.com/kata/two-oldest-ages-1
//kyu: 7


const twoOldestAges = (a) => {
    return a.sort((a,b) => a-b).slice(-2)
}



console.log(twoOldestAges([2, 1, 3, 8, 5, 9]), [8, 9]);
console.log(twoOldestAges([15, 2, 4, 8, 5, 6]), [8, 15]);