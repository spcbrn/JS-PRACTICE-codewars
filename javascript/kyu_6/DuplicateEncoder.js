
//URL: https://www.codewars.com/kata/duplicate-encoder
//kyu: 6

//non-recursive v1:
// const duplicateEncode = str => {
//     str = str.toLowerCase();
//     let encoded = '';
//     for (let i = 0; i < str.length; i++) {
//         let ref = str.split('')
//         ref.splice(i, 1);
//         encoded += ref.includes(str[i])
//             ? ')'
//             : '('
//     }
//     return encoded;
// }

//recursive v1:
// const duplicateEncode = (str, code = '', i = 0) => {
//     str = str.toLowerCase();
//     if (str.length === i) return code;

//     let ref = str.split('')
//     ref.splice(i, 1)
//     code += ref.includes(str[i])
//         ? ')'
//         : '(';
//     return duplicateEncode(str, code, i + 1)
// }

//one line:
const duplicateEncode = str => str
    .toLowerCase()
    .split('')
    .map((c, i, a) => a
        .filter(c1 => c1 === c).length > 1 ? ')' : '(')
    .join('')



console.log(duplicateEncode("din"),"(((");
console.log(duplicateEncode("recede"),"()()()");
console.log(duplicateEncode("Success"),")())())","should ignore case");
console.log(duplicateEncode("(( @"),"))((");