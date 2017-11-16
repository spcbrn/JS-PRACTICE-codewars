
//URL: http://www.codewars.com/kata/split-strings
//kyu: 6


const solution = (s) => {
  let output = [];
  for (i = 0; i < s.length; i+=2) {
    output.push(s.substr(i,2))
  }
  let idx = output.length - 1
  output[idx] = output[idx].length === 1 ? output[idx] + '_' : output[idx]
  return output;
}



console.log(solution('abc'), ['ab', 'c_'])
console.log(solution('abcdef'), ['ab', 'cd', 'ef'])
