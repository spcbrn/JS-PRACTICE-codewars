
//URL: https://www.codewars.com/kata/build-a-pile-of-cubes
//kyu: 6

//hyper verbose (my) solution:
let nHash = {};
const findNb = vol => {
    let topTotal = 0;
    let n = 2;
    while (topTotal <= vol) {
        if (nHash[n]) {
            topTotal = nHash[n]
        } else {
            for(let i = 0; i <= n; i++) {
                if (n - i > 0) topTotal += Math.pow(n - i, 3)
            }
        }
        if (topTotal === vol) return n;
        if (topTotal > vol) break;
        if (!nHash[n]) nHash[n] = topTotal;
        topTotal = 0;
        n++;
    }
    return -1;
}

//top cw solution (math I can scarcely grasp):
// const findNb = m => {
//     var n = 0
//     while (m > 0) m -= ++n**3
//     return m ? -1 : n
// }



console.log(findNb(4183059834009), 2022)
console.log(findNb(24723578342962), -1)
console.log(findNb(135440716410000), 4824)
console.log(findNb(40539911473216), 3568)