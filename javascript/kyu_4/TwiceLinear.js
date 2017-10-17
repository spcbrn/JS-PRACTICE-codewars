
//URL: https://www.codewars.com/kata/twice-linear
//kyu: 4


const dblLinear = (n) => {
    let u = [1];
    for (i = 0; u.length <= n*2; i++) {
        let y = 2 * u[i] + 1;
        let z = 3 * u[i] + 1;
        if (!u.includes(z)) {
            u.push(z);
        }
        if (!u.includes(y)) {
            u.push(y)
        }
        u.sort((a,b) => a-b)
    }
    return u[n]
}


console.log(dblLinear(10), 22)
console.log(dblLinear(20), 57)
console.log(dblLinear(30), 91)
console.log(dblLinear(50), 175)
console.log(dblLinear(100), 447)