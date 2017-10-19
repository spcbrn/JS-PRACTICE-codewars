
//URL:http://www.codewars.com/kata/selective-array-reversing
//kyu: 6


const selReverse = (a, l) => {
    let output = [];
    if (!l) {
        return a;
    }
    for (i = 0; i < a.length; i += l) {
        output = output.concat(a.slice(i, i+l).reverse())
    }
    return output;
}



console.log(selReverse([2,4,6,8,10,12,14,16], 3), [6,4,2, 12,10,8, 16,14]);
console.log(selReverse([1,2,3,4,5,6], 2), [2,1, 4,3, 6,5]); 