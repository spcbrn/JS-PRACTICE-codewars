
//URL: http://www.codewars.com/kata/take-a-ten-minute-walk
//kyu: 6


const isValidWalk = (traj) => {
  let vectors = {n: 1, s: -1, w: 1, e: -1};
  let cuml = 0;
  traj.forEach(c => cuml += vectors[c]);
  return traj.length === 10 ? cuml ? false : true : false;
}


console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), true);
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), false);
console.log(isValidWalk(['w']), false);
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']), false);
