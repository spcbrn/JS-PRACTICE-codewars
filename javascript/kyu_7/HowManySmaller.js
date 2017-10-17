
//URL: http://www.codewars.com/kata/how-many-are-smaller-than-me
//kyu: 7


const smaller = (n) => {
    n.forEach((c, i, a) => {
      let count = 0;
      for (j = i+1; j < n.length; j++) {if (n[j] < c) {count++}}
      n[i] = count;
    })
    return n;
}



console.log(smaller([5, 4, 3, 2, 1]), [4, 3, 2, 1, 0]);
console.log(smaller([1, 2, 3]), [0, 0, 0]);
console.log(smaller([1, 2, 0]), [1, 1, 0]);
console.log(smaller([1, 2, 1]), [0, 1, 0]);
console.log(smaller([1, 1, -1, 0, 0]), [3, 3, 0, 0, 0]);
console.log(smaller([5, 4, 7, 9, 2, 4, 4, 5, 6]), [4, 1, 5, 5, 0, 0, 0, 0, 0]);