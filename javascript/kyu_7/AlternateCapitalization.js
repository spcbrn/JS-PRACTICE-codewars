
//URL: https://www.codewars.com/kata/alternate-capitalization
//kyu: 8


const capitalize = (s) => {
    let output = [];
    let split = s.split('')
    output.push(split.map((c, i) => {
        if (!(i % 2)) {
            return c.toUpperCase();
        }
        return c;
    }).join(''))
    output.push(split.map((c, i) => {
        if (i % 2) {
            return c.toUpperCase()
        }
        return c;
    }).join(''))
    return output;
}




console.log(capitalize("abcdef"),['AbCdEf', 'aBcDeF']);
console.log(capitalize("codewars"),['CoDeWaRs', 'cOdEwArS']);
console.log(capitalize("abracadabra"),['AbRaCaDaBrA', 'aBrAcAdAbRa']);
console.log(capitalize("codewarriors"),['CoDeWaRrIoRs', 'cOdEwArRiOrS']);