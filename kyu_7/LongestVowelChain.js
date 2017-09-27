
//URL: https://www.codewars.com/kata/longest-vowel-chain/train/javascript
//kyu: 7


function solve(s){
    let longest = 0;
    let cache = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let sArray = s.split('').map(c => {
        if (vowels.includes(c)) {
            return c;
        } else {
            return
        }
    })
    return sArray;
   }






console.log(solve("codewarriors"),2);
console.log(solve("suoidea"),3);
console.log(solve("ultrarevolutionariees"),3);
console.log(solve("strengthlessnesses"),1);
console.log(solve("cuboideonavicuare"),2);
console.log(solve("chrononhotonthuooaos"),5);
console.log(solve("iiihoovaeaaaoougjyaw"),8);