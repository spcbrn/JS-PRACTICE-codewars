
const setMaker = () => {
    let set = [];
    for (i=0; i<9999999; i++) {
        let rand = Math.floor(Math.random() * (9 - 1) + 1)
        if (rand > 4) {
            set.push(i)
        }
    }
    return set.join('\n')
}
