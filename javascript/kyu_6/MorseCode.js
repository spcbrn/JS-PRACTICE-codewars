
//URL: https://www.codewars.com/kata/decode-the-morse-code
//kyu: 6


//multi line:
// const decodeMorse = code => {
//     let words = code.split('  ')
//     return words.map(word => word.split(' ').map(character => MORSE_CODE[character]).join('')).join(' ').trim()
// }

//single line:
const decodeMorse = code => code.split('  ').map(c1 => c1.split(' ').map(c2 => MORSE_CODE[c2]).join('')).join(' ').trim();


console.log(decodeMorse('.... . -.--   .--- ..- -.. .'), 'HEY JUDE');