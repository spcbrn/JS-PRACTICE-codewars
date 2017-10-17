
//URL: https://www.codewars.com/kata/571d7ea72b97f286520009bb
//kyu: 6


const solveIt = (excel, n) => {
    let el = excel[n];
    let sorted = [...excel].sort((a,b) => a-b)
    let aug = 1;
    excel.forEach((c, i) => {
        if (c === el && i < n) {
            aug++
        }
    })
    return sorted.indexOf(el)+aug;
}



console.log(solveIt([1,2,3,4,5],0),1);
console.log(solveIt([1,2,3,4,5],1),2);
console.log(solveIt([5,4,3,2,1],0),5);
console.log(solveIt([5,4,3,2,1],1),4);
console.log(solveIt([1,2,2,2,3],1),2);
console.log(solveIt([1,2,2,2,3],2),3);
console.log(solveIt([2,2,2,2,2],2),3);
console.log(solveIt([14,66,45,5,68,70,8,30,68,64,68,41],7),4);
console.log(solveIt([29,14,5,28,99,15,3,88,37,16,34,28,20,96,29,38,34,30,46,34,62,12,74,7,84,25,69,5,2,73,28,60,60,20,68,63,37,48,63,10,82,97,42,59,31,53,7,68,77,52,13,75,70,90,74,34,79,47,9,21,20,92,45,43,55,84,84,35,84,83,47,14,69,7,14,30,33,92,5,1,57,36,18], 33), 21)