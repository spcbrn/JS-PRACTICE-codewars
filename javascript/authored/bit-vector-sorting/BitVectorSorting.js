const shuffle = (a) => {
    var i = 0
      , j = 0
      , temp = null
  
    for (i = a.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = a[i]
      a[i] = a[j]
      a[j] = temp
    }
}

const setMaker = () => {
    let set = [];
    for (i=0; i<9999999; i++) {
        let rand = Math.floor(Math.random() * (9 - 1) + 1)
        if (rand > 4) {
            set.push(i)
        }
    }
    shuffle(set)
    return set.join('|')
}



// const input1 = '3\n14\n5\n19\n18\n1\n8\n11\n2';
// const input2 = '19\n5\n7\n8\n14\n17\n11\n13\n1';
const input3 = setMaker();
// const input4 = setMaker();
// const input5 = setMaker();



const bitVectorSort = (set) => {
    let vals = set.split('\n')
    let bitmap = [];
    let output = [];
    for (i=0; i<9999999; i++) {
        bitmap[i] = 0;
    }
    for (i=0; i<vals.length; i++) {
        let idx = vals[i]*1;
        bitmap[idx] = 1;
    }
    for (i=0; i<bitmap.length; i++) {
        if (bitmap[i] !== 0) {
            output.push(i)
        }
    }
    return output.join('|')
}


// console.log(bitVectorSort(input1))
// console.log(bitVectorSort(input2))
// console.log(bitVectorSort(input4))
// console.log(bitVectorSort(input5))

console.log(input3)