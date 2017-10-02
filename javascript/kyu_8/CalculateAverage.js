
//URL: https://www.codewars.com/kata/calculate-average/train/javascript
//kyu: 8


const find_average = (array) => {
    return array.reduce((a,b) => a+b)/array.length;
}



console.log(find_average([1,1,1]), 1);
console.log(find_average([1,2,3]), 2);