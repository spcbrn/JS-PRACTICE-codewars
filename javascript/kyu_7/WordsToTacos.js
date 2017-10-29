
//URL: https://www.codewars.com/kata/turn-any-word-into-a-beef-taco
//kyu: 7


const tacofy = (w) => {
    let output = ['shell'];
    let base = w.toLowerCase().replace(/[^aeiougclts]/g, '');
    if (base.length) {
        base.split('').forEach(c => {
            if (c.match(/[aeiou]/)) {
                output.push('beef')
            } else if (c.match(/[l]/)) {
                output.push('lettuce')
            } else if (c.match(/[g]/)) {
                output.push('guacamole')
            } else if (c.match(/[t]/)) {
                output.push('tomato')
            } else if (c.match(/[c]/)) {
                output.push('cheese')
            } else if (c.match(/[s]/)) {
                output.push('salsa')
            }
        })
    }
    output.push('shell')
    return output;
}



console.log(tacofy(""),['shell', 'shell'])
console.log(tacofy("a"), ['shell', 'beef', 'shell'])
console.log(tacofy("ggg"), ['shell', 'guacamole', 'guacamole', 'guacamole', 'shell'])
console.log(tacofy("ogl"),['shell', 'beef', 'guacamole', 'lettuce', 'shell'])
console.log(tacofy("ydjkpwqrzto"), ['shell', 'tomato', 'beef', 'shell'])