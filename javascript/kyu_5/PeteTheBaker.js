
//URL: https://www.codewars.com/kata/pete-the-baker
//kyu: 5


const cakes = (r, i) => {
    let max = [];
    for (k in r) {
        if (i[k]) {
            max.push(Math.floor(i[k] / r[k]))
        } else {
            max.push(0)
        }
    }
    return max.includes(0) ? 0 : max.sort((a,b)=>a-b)[0];
}



console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}), 2);
console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}), 0)