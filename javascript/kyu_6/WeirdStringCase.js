
//URL: https://www.codewars.com/kata/weird-string-case
//kyu: 6


const toWeirdCase = (s) => {
    let sArray = s.split(' ');
    let output = [];
    sArray.map(w => {
        let word = w.split('').map((c,i,a) => {
            return i === 0 || i % 2 === 0 ? c.toUpperCase() : c.toLowerCase()
        })
        output.push(word.join(''));
    })
    return output.join(' ');
}



console.log(toWeirdCase('This'), 'ThIs');
console.log(toWeirdCase('is'), 'Is');
console.log(toWeirdCase('This is a test'), 'ThIs Is A TeSt');