
//URL: https://www.codewars.com/kata/are-they-the-same
//kyu: 6


const comp = (a1, a2) => {
    if (a1.length !== a2.length) return false
    a1.forEach((c, i) => {
        if (a2.includes(Math.pow(c, 2))) {
            a1[i] = true;
            a2[a2.indexOf(Math.pow(c, 2))] = true;
        }
    })
    return (a1.includes(false) || a2.includes(false)) ? false : true;
}


a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
console.log(comp(a1, a2), true);