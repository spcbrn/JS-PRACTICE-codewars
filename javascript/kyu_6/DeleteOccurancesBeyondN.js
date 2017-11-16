
//URL: http://www.codewars.com/kata/delete-occurrences-of-an-element-if-it-occurs-more-than-n-times
//kyu: 6


const deleteNth = (a, n) => {
  let ref = {};
  let output = [];
  a.forEach(c => {
    if (ref[c] === n) {
      return;
    } else if (!ref[c]) {
      ref[c] = 1;
      output.push(c);
    } else {
      ref[c] += 1
      output.push(c)
    }
  })
  return output
}


console.log(deleteNth([20,37,20,21], 1), [20,37,21])
console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3), [1,1,3,3,7,2,2,2])
