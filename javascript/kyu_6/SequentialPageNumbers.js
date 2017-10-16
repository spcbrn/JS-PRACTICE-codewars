
//URL: https://www.codewars.com/kata/concatenate-sequential-page-numbers-in-an-array
//kyu: 6


const paginate = (a) => {
    let output = '';
    let currentRange = [];
    a.sort((a,b) => a - b).forEach((c, i) => {
        if (a[i+1] === (c+1)) {
            currentRange.push(c)
            return;
        } else if (a[i-1] === (c-1) || currentRange.length) {
            output += currentRange[0] + '-' + c + ', ';
            currentRange = []
            return
        }
        output += c + ', ';
    })
    return output.substr(0, output.length-2);
}




console.log(paginate([1,3,4,5,7,9,10]), '1, 3-5, 7, 9-10');
console.log(paginate([10,12,13,14,15,16,17,20,22,23,27]));
console.log(paginate([9,1,8,4,7,3,5]), '1, 3-5, 7-9');
console.log(paginate([4, 20, 3, 19, 2, 23, 1]), '1-4, 19-20, 23');