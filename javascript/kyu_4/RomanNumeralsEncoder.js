
//URL: https://www.codewars.com/kata/roman-numerals-encoder
//kyu: 4


const solution = (n) => {
    let codex = {1: 'I', 5: 'V', 10: 'X', 50: 'L', 100: 'C', 500: 'D', 1000: 'M'}
    let comp = [];
    let output = '';
    if (n / 1000 || n >= 900) {
        let num = Math.floor(n/1000)
        for (i = num; i > 0; i--) {
            comp.push(1000)
        }
        n -= (Math.floor(n/1000)*1000)
        if (n >= 900) {
            for (i = 2; i > 0; i--) {
                i === 1 ? comp.push(1000) : comp.push(100)
            }
            n -= 900;
        }
    } 
    if (n / 500 || n >= 400) {
        let num = Math.floor(n/500)
        for (i = num; i > 0; i--) {
            comp.push(500)
        }
        n -= (Math.floor(n/500)*500)
        if (n >= 400) {
            for (i = 2; i > 0; i--) {
                i === 1 ? comp.push(500) : comp.push(100)
            }
            n -= 400;
        }
    }
    if (n / 100 || n >= 90) {
        let num = Math.floor(n/100)
        for (i = num; i > 0; i--) {
            comp.push(100)
        }
        n -= (Math.floor(n/100)*100)
        if (n >= 90) {
            for (i = 2; i > 0; i--) {
                i === 1 ? comp.push(100) : comp.push(10)
            }
            n -= 90;
        }
    }
    if (n / 50 || n >= 40) {
        let num = Math.floor(n/50)
        for (i = num; i > 0; i--) {
            comp.push(50)
        }
        n -= (Math.floor(n/50)*50)
        if (n >= 40) {
            for (i = 2; i > 0; i--) {
                i === 1 ? comp.push(50) : comp.push(10)
            }
            n -= 40
        }
    }
    if (n / 10 || n === 9) {
        let num = Math.floor(n/10)
        for (i = num; i > 0; i--) {
            comp.push(10)
        }
        n -= (Math.floor(n/10)*10)
        if (n === 9) {
            for (i = 2; i > 0; i--) {
                i === 1 ? comp.push(10) : comp.push(1)
            }
            n -= 9;
        }
    }
    if (n / 5 || n === 4) {
        let num = Math.floor(n/5)
        for (i = num; i > 0; i--) {
            comp.push(5)
        }
        n -= (Math.floor(n/5)*5)
        if (n === 4) {
            for (i = 2; i > 0; i--) {
                i === 1 ? comp.push(5) : comp.push(1)
            }
            n -= 4;
        }
    }
    if (n > 0) {
        for (i = n; i > 0; i--) {
            comp.push(1)
        }
    }
    comp.forEach(c => {
        output += codex[c]
    })
    return output;
}



console.log(solution(1), 'I')
console.log(solution(4), 'IV')
console.log(solution(1000), 'M')
console.log(solution(1990), 'MCMXC')
console.log(solution(2007), 'MMVII')
console.log(solution(977), 'CMLXXVII')