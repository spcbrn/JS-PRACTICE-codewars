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
    for (i=0; i<5000; i++) {
        let rand = Math.floor(Math.random() * (9 - 1) + 1)
        if (rand > 7) {
            set.push(i)
        }
    }
    shuffle(set)
    return set.join('/n')
}

console.log(JSON.stringify(setMaker()))
