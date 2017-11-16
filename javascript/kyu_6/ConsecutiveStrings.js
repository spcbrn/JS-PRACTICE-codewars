
//URL: http://www.codewars.com/kata/consecutive-strings
//kyu: 6


const longestConsec = (a, k) => {
  if (k > a.length || k < 1 || !a.length) {
    return ''
  }
  let seqLength = 0;
  let output = ''
  for (let i = 0; i <= a.length-k; i++) {
    let str = '';
    for (let j = 0; j < k; j++) {
      str += a[i+j]
    }
    if (str.length > seqLength) {
      seqLength = str.length;
      output = str;
    }
  }
  return output;
}



console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2), "abigailtheta")
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1), "oocccffuucccjjjkkkjyyyeehh")
console.log(longestConsec([], 3), "")
console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2), "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck")
console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2), "wlwsasphmxxowiaxujylentrklctozmymu")
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2), "")
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3), "ixoyx3452zzzzzzzzzzzz")
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15), "")
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0), "")
