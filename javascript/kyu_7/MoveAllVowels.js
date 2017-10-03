
//URL: https://www.codewars.com/kata/move-all-vowels
//kyu: 7


// function moveVowel(input) {
//     let vowels = ['a', 'e', 'i', 'o', 'u'];
//     let consArr = input.split('').filter(c=>!vowels.includes(c));
//     let vowArr = input.split('').filter(c=>vowels.includes(c));
//     return [...consArr, ...vowArr].join('')
// }

function moveVowel(i) {
    let v = ['a', 'e', 'i', 'o', 'u'];
    return [...i.split('').filter(c=>!v.includes(c)), ...i.split('').filter(c=>v.includes(c))].join('')
}





console.log(moveVowel("day"),"dya");
console.log(moveVowel("apple"),"pplae");
console.log(moveVowel("peace"),"pceae");
console.log(moveVowel("maker"),"mkrae");