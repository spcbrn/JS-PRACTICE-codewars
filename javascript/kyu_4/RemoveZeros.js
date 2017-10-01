//URL: https://www.codewars.com/kata/remove-zeros/train/javascript
//kyu: 4


const removeZeros = (a) => {
    let zeros = 0;
    for (i = 0; i < a.length-zeros; i++) {
        if (a[i] === 0 || a[i] === '0') {
            zeros++;
            let current = a[i]
            for (j = i; j < a.length; j++) {
                if (j < a.length-1) {
                    a[j] = a[j+1]
                } else if (j === a.length-1) {
                    a[j] = current
                }
            }
        }
        if (a[i-1] === 0 || a[i-1] === '0') {
            i -= 2
        }
    }
    return a;
}


console.log(removeZeros([7, 2, 3, '0', 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]), [7, 2, 3, 4, 6, 13, 78, 19, 14, '0', 0, 0, 0, 0, 0])