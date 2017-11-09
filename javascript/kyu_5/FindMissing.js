
//URL: https://www.codewars.com/kata/find-the-missing-term-in-an-arithmetic-progression
//kyu: 5


const findMissing = (a) => {
  let ref = {};
  let prog = [];
  let output;
  for (let i = 0; i < a.length; i++) {
    if (i !== a.length-1) {
      ref[i] = a[i+1] - a[i];
      prog.push(a[i+1] - a[i]);
    }
  };
  prog.sort((a,b) => a-b).reverse()
  for (let key in ref) {
    if (ref[key] === prog[0]) {
      output = a[key] + prog[1]
    }
  }
  return output;
}


console.log(findMissing([1,3,5,9,11]), 7)
