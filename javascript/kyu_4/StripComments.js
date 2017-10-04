
//URL: https://www.codewars.com/kata/strip-comments
//kyu: 4


const solution = (inp, mark) => {
    let inpArr = inp.split('\n')
    mark.forEach(c => {
        inpArr.forEach((c1, i) => {
            if (c1.includes(c) && c1[c1.indexOf(c)-1] === ' ') {
                let index = c1.indexOf(c)-1;
                inpArr[i] = inpArr[i].slice(0, index)
            } else if (c1.includes(c)) {
                let index = c1.indexOf(c);
                inpArr[i] = inpArr[i].slice(0, index)
            }
        })
    })
    return inpArr.join('\n')
}



console.log(solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]),
 'apples, pears\ngrapes\nbananas')