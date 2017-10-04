//URL:  
//kyu: 4


const removeZeros = (array) => {
    let zeros = 0;
    for (i = 0; i < array.length-zeros; i++) {
        if (array[i] === 0 || array[i] === '0') {
            zeros++;
            let current = array[i]
            for (j = i; j < array.length; j++) {
                if (j < array.length-1) {
                    array[j] = array[j+1]
                } else if (j === array.length-1) {
                    array[j] = current
                }
            }
        }
        if (array[i-1] === 0 || array[i-1] === '0') {
            i -= 2
        }
    }
    return array;
}




console.log(removeZeros([7, 2, 3, '0', 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]), [7, 2, 3, 4, 6, 13, 78, 19, 14, '0', 0, 0, 0, 0, 0])