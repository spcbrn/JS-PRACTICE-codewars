
//URL: https://www.codewars.com/kata/odder-than-the-rest/javascript
//kyu: 7


function oddOne(arr) {
    let index = -1;
    arr.forEach((c, i) => {
      c = c < 0 ? c * -1 : c;
      index = c % 2 ? i : index;
    })
    return index;
}



console.log(oddOne([2,4,6,7,10]), 3);
console.log(oddOne([2,16,98,10,13,78]), 4);
console.log(oddOne([4,-8,98,-12,-7,90,100]), 4);
console.log(oddOne([2,4,6,8]), -1);