
//URL: http://www.codewars.com/kata/find-the-missing-letter
//kyu: 6


const findMissingLetter = (arr) => {
  let codes = arr.map(c => c.charCodeAt(0))
  let output;
  codes.forEach((c,i,a) => {
    if (i < a.length-1 && a[i+1] !== c+1) {
      output = c + 1
    }
  })
  return String.fromCharCode(output)
}


console.log(findMissingLetter(['a','b','c','d','f']), 'e');
console.log(findMissingLetter(['O','Q','R','S']), 'P');
