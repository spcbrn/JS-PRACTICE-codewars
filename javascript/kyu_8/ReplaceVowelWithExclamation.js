
//URL https://www.codewars.com/kata/exclamation-marks-series-number-11-replace-all-vowel-to-exclamation-mark-in-the-sentence/train/javascript
//kyu: 8



function replace(s){
//     let vowels = ['a','e','i','o','u'];
//     let newA = s.split('')
//     newA.forEach((letter, i) => {
//       if (vowels.includes(letter.toLowerCase())){
//         newA[i] = '!';
//       }
//     })
//   return newA.join('');
    var res = s.replace(/[aeiou]/gi, '!');
    return res;
}






console.log(replace("Hi!") , "H!!")
console.log(replace("!Hi! Hi!") , "!H!! H!!")
console.log(replace("aeiou") , "!!!!!")
console.log(replace("ABCDE") , "!BCD!")
