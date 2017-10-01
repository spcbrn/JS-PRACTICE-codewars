
//URL: https://www.codewars.com/kata/multiples-of-3-and-5/train/javascript
//kyu: 6


function solution(n) {
    mult = [];
    for (i=0; i<n; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            mult.push(i);
        }
    }
    return mult.length ? mult.reduce((a,b) => {return a+b}) : 0
}



console.log(solution(10), 23)