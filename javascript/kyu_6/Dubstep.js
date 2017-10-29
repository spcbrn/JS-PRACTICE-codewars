
//URL: https://www.codewars.com/kata/dubstep
//kyu: 6


const songDecoder = (s) => s.split('WUB').filter(c => c).join(' ')




console.log(songDecoder("AWUBBWUBC"), "A B C");
console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC"), "A B C");
console.log(songDecoder("WUBAWUBBWUBCWUB"), "A B C");
