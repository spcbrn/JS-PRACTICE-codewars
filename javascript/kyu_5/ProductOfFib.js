
//URL: https://www.codewars.com/kata/product-of-consecutive-fib-numbers
//kyu: 5

const productFib = n => {
    const getFib = c => {
        let sum = [1, 1];
        for (let i = 2; i < c; i++) {
            let newVal = sum[i-1] + sum[i-2];
            sum.push(newVal)
        }
        return sum[c - 1];
    }
    let sums = []
      , prod = 0
      , i = 3;
    while (prod < n) {
        sums[0] = getFib(i - 1);
        sums[1] = getFib(i);
        prod = sums.reduce((a, b) => a * b)
        i++;
    }
    return [sums[0], sums[1], prod === n]
}

/*
Iterate through sets of 2 consecutive fib sums, multiplied
If their product equals input product, add each sum to array with true
If their product is less than the input, but the next set's product is greater, return the latter set and false
*/


console.log(productFib(4895), [55, 89, true])
console.log(productFib(5895), [89, 144, false])
console.log(productFib(74049690), [6765, 10946, true])
console.log(productFib(84049690), [10946, 17711, false])
console.log(productFib(193864606), [10946, 17711, true])
console.log(productFib(447577), [610, 987, false])
console.log(productFib(602070), [610, 987, true])