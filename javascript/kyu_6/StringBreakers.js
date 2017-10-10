
//URL: https://www.codewars.com/kata/string-breakers
//kyu: 6


const stringBreakers = (n, s) => {
    let sArr = s.split(' ').join('').split('');
    let output = '';
    let index = 0;
    for (i=0; i < sArr.length; i++) {
        if (index < n) {
            output += sArr[i]
            index++;
        } else if (index >= n) {
            output += '\n';
            index = 0;
            i--;
        }
    }
    return output;
}

// function stringBreakers(n, string){
//     substrings = [];
//     string = string.replace(/\s/g, '').split('');
//     for (var i = 0, j = n; i < string.length; i+= n, j+= n) {
//       substrings.push(string.slice(i, j))
//     }
//     return substrings.map((word) => word.join('')).join('\n');
// }


console.log(stringBreakers(5, 'This is an example string'),
'Thisi'+'\n'+'sanex'+'\n'+'ample'+'\n'+'strin'+'\n'+'g');