
//URL: https://www.codewars.com/kata/unique-in-order
//kyu: 6


const uniqueInOrder = (a) => {
    a = typeof a === 'string' ? a.split('') : a;
    let output = [];
    let prev = '';
    for (i=0; i<a.length; i++) {
        if (a[i] !== prev) {
            output.push(a[i])
            prev = a[i]
        }
    }
    return output;
}



console.log(uniqueInOrder('AAAABBBCCDAABBB'), ['A','B','C','D','A','B'])