
//URL: https://www.codewars.com/kata/highest-rank-number-in-an-array
//kyu: 6


const highestRank = (a) => {
    let output;
    let ref = {};
    a.forEach((c,i) => {
        if (i ===a.indexOf(c)) {
            ref[c] = 1;
        } else {
            ref[c] += 1;
        }
    })
    let high = 0;
    for (n in ref) {
        if (ref[n] === high) {
            output = n > output ? n : output;
        }
        if (ref[n] > high) {
            high = ref[n];
            output = n;
        }
    }
    return Number(output);
}



console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]), 12);
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10]), 12);
console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]), 3);