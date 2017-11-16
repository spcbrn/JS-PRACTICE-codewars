
//URL: http://www.codewars.com/kata/find-the-parity-outlier
//kyu: 6


const findOutlier = (a) => {
  let odds = a.filter(c => c % 2);
  let evens = a.filter(c => c % 2 === 0);
  return odds.length > 1 ? evens[0] : odds[0]
}



console.log(findOutlier([0, 1, 2]), 1)
console.log(findOutlier([1, 2, 3]), 2)
console.log(findOutlier([2,6,8,10,3]), 3)
console.log(findOutlier([0,0,3,0,0]), 3)
console.log(findOutlier([1,1,0,1,1]), 0)
