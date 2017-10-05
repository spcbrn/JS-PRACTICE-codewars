
//URL: https://www.codewars.com/kata/number-of-folds
//kyu: 7


const numberOfFolds = (n) => {
    let f = 0;
    let s = 1;
    while (s < n) {
        s *= 2;
        f++
    }
    return f
}


console.log(numberOfFolds(1),0);
console.log(numberOfFolds(2),1);
console.log(numberOfFolds(8),3)