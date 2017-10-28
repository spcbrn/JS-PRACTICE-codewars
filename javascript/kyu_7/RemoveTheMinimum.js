
//URL: https://www.codewars.com/kata/remove-the-minimum
//kyu: 7

const removeSmallest = (a) => {
    let ref = [...a];
    let sort = [...a].sort((a,b)=>a-b)
    let low = sort[0]
    ref.splice(ref.indexOf(low), 1)
    return ref
}


console.log(removeSmallest([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
console.log(removeSmallest([5, 3, 2, 1, 4]), [5, 3, 2, 4]);
console.log(removeSmallest([2, 2, 1, 2, 1]), [2, 2, 2, 1]);
console.log(removeSmallest([]), []);