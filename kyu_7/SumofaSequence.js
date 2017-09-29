
//URL: https://www.codewars.com/kata/sum-of-a-sequence
//kyu: 7


const sequenceSum = (begin, end, step) => {
    let a = [];
    if (begin > end) {
        return 0;
    } else {
        for (i = begin; i <= end; i += step) {
            a.push(i)
        }
        return a.reduce((a,b)=>a+b);
    }
}










console.log(sequenceSum(2,2,2), 2)
console.log(sequenceSum(2,6,2), 12)
console.log(sequenceSum(1,5,1), 15)
console.log(sequenceSum(1,5,3), 5)