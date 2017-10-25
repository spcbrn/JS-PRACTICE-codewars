
//URL: https://www.codewars.com/kata/vowel-consonant-lexicon
//kyu: 6


const solve = (s) => {
    let output = '';
    let vDic = s.match(/[aeiou]/g).sort();
    let cDic = s.match(/[^aeiou]/g).sort();
    let start = vDic.length > cDic.length ? vDic : cDic.length === vDic.length ? vDic : cDic
    let second = start === vDic ? cDic : vDic
    if (vDic.length !== cDic.length) {
        if (vDic.length > cDic.length) {
            if (vDic.length-cDic.length >= 2) {
                return 'failed'
            }
        } else {
            if (cDic.length - vDic.length >= 2) {
                return 'failed'
            }
        }
    }
    while (start.length) {
        output += start.shift();
        output = second.length ? output + second.shift() : output;
    }
    return output
}


console.log(solve("java"),'ajav');
console.log(solve("oruder"),'edorur');
console.log(solve("zodiac"),'acidoz');
console.log(solve("apple"),'lapep');
console.log(solve("acidity"),'caditiy');
console.log(solve("codewars"),'failed');
console.log(solve("orudere"),'ederoru');