
//URL: https://www.codewars.com/kata/find-the-divisors
//kyu: 6


const divisors = n => {
    let output = [];
    for (let i = 2; i < n; i++) {
        if (n % i === 0) output.push(i)
    }
    return output.length
        ? output
        : `${n} is prime`
}


console.log(divisors(15), [3, 5]);
console.log(divisors(12), [2, 3, 4, 6]);
console.log(divisors(13), "13 is prime");