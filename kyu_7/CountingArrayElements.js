
//URL: https://www.codewars.com/kata/counting-array-elements/javascript
//kyu: 7


function count(a){
    let r = {};
    a.forEach(c => r[c] ? r[c]++ : r[c] = 1);
    return r;
}




console.log(count(['a', 'a', 'b', 'b', 'b']), { 'a': 2, 'b': 3 })