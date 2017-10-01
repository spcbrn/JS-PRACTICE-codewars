
//URL: https://www.codewars.com/kata/longest-vowel-chain/train/javascript
//kyu: 7


function solve(s){
    let cache = 0;
    let longest = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    s.split('').forEach(c => {
        vowels.includes(c) ? cache++ : cache = 0;
        longest = cache > longest ? cache : longest;
    })
    return longest;
}






console.log(solve("codewarriors"),2);
console.log(solve("suoidea"),3);
console.log(solve("ultrarevolutionariees"),3);
console.log(solve("strengthlessnesses"),1);
console.log(solve("cuboideonavicuare"),2);
console.log(solve("chrononhotonthuooaos"),5);
console.log(solve("iiihoovaeaaaoougjyaw"),8);