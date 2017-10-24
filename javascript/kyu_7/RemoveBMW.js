
//URL: https://www.codewars.com/kata/remove-b-m-w
//kyu: 7


const removeBMW = (s) => {
    if (typeof s !== 'string') {
        throw new Error("This program only works for text.");
    }
    return s.replace(/[bmw]+/gi, '');
}

console.log(typeof 'asdf' === 'string')

console.log(removeBMW("bmwvolvoBMW"), "volvo");
console.log(removeBMW(2));