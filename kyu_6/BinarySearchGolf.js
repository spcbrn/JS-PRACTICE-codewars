
//URL: https://www.codewars.com/kata/binary-search-golf
//kyu: 6
//important notes: This kata is a code golf, so the object is to solve the problem in as few characters as possible.


//this is the readable version (the test requires the fewest number of characters possible)

// z=(l)=>{
//     let i = 1
//     let ll = 1
//     while(ll < l){
//         i+=1
//         ll*=2
//     }
//     return i
// }

z=(l)=>{let i=1;let j=1;while(j<l){i++;j*=2}return j>l?i-1:i}


console.log(z(9136), 14)

console.log('z=(l)=>{let i=1;let j=1;while(j<l){i++;j*=2}return j>l?i-1:i}'.length)