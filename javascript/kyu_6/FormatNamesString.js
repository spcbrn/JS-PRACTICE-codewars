
//URL: https://www.codewars.com/kata/format-a-string-of-names-like-bart-lisa-and-maggie
//kyu: 6

//multi line:
// const list = hash => {
//     let output = '';
//     hash.forEach((c, i, a) => {
//         if (i === 0) output += a.length > 2 ? `${c.name},` : c.name;
//         else if (i === a.length - 1) output += ` & ${c.name}`
//         else output += i === a.length - 2 ? ` ${c.name}` : ` ${c.name},`
//     })
//     return output;
// }

//separated single line/ternary:
// const list = hash => hash
//     .map((c, i, a) => i === 0
//         ? a.length > 2
//             ? `${c.name},`
//             : c.name
//         : i === a.length - 1
//             ? ` & ${c.name}`
//             : i === a.length - 2
//                 ? ` ${c.name}`
//                 : ` ${c.name},`)
//     .join('')

//intact single line/ternary:
const list = hash => hash.map((c, i, a) => i === 0 ? a.length > 2 ? `${c.name},` : c.name : i === a.length - 1 ? ` & ${c.name}` : i === a.length - 2 ? ` ${c.name}` : ` ${c.name},`).join('')


console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]), 'Bart, Lisa, Maggie, Homer & Marge')
console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}]), 'Bart, Lisa & Maggie')
console.log(list([{name: 'Bart'},{name: 'Lisa'}]), 'Bart & Lisa')
console.log(list([{name: 'Bart'}]), 'Bart')
console.log(list([]), '')