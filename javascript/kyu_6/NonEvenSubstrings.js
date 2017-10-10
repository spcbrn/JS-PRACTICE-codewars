
//URL: https://www.codewars.com/kata/non-even-substrings
//kyu: 6


const solve = (s) => {
    let divs = [];
    let depth = 1;
    for (i = 0; i <= s.length - depth; i++) {
        divs.push(s.substr(i, depth));
        if (depth === s.length) {
            break;
        } else if (i === s.length - depth) {
            depth++;
            i = -1
        }
    }
    return divs.filter(c => c[c.length-1] % 2).length;
}


console.log(solve("1341"),7);
console.log(solve("1357"),10);
console.log(solve("13471"),12);
console.log(solve("134721"),13);
console.log(solve("1347231"),20);
console.log(solve("13472315"),28);
console.log(solve('27248493681696823583654278312243495877855272643872317972235148314321453411161676'), 1816)