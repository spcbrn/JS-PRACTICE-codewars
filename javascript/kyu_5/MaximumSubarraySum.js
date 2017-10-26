
//URL: https://www.codewars.com/kata/maximum-subarray-sum
//kyu: 5

const maxSequence = (a) => {
        let highSum = 0;
        for (i = 0; i < a.length; i++) {
            let range = [a[i]];
            highSum = i === a.length-1 ? a[i] > highSum ? a[i] : highSum : highSum
            for (j = i+1; j < a.length; j++) {
                range.push(a[j])
                let currSum = range.reduce((a,b) => a+b, 0)
                highSum = currSum > highSum ? currSum : a[i] > highSum ? a[i] : highSum
            }
        }
        return highSum
    }

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);