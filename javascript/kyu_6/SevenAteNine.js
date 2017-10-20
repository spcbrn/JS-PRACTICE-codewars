
//URL: https://www.codewars.com/kata/seven-ate-nine
//kyu: 6


const hungrySeven = (a) => {
    let s = a.join('').toString();
    if (!s.match(['789'])) {
        return a;
    } else {
        s = s.replace(/789/gi, '897').split('');
        s = s.map(c => c*1)
        return hungrySeven(s)
    }
}



console.log(hungrySeven([7,8,9]), [8,9,7]);
console.log(hungrySeven([7,7,7,8,9]),[8,9,7,7,7]);
console.log(hungrySeven([8,7,8,9,8,9,7,8]),[8,8,9,8,9,7,7,8]);
console.log(hungrySeven([8,7,8,7,9,8]),[8,7,8,7,9,8]);