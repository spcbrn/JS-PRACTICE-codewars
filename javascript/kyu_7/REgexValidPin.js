
//URL: https://www.codewars.com/kata/regex-validate-pin-code/
//kyu: 7


const validatePIN = (n) => {
    let ref = n.length === 6 ? n.match(/\d{6}/g) : n.length === 4 ? n.match(/\d{4}/g) : null
    return ref ? true : false
}


console.log(validatePIN("1"),false);
console.log(validatePIN("12"),false);
console.log(validatePIN("123"),false);
console.log(validatePIN("12345"),false);
console.log(validatePIN("1234"),true);
console.log(validatePIN("0000"),true);
console.log(validatePIN("1111"),true);
console.log(validatePIN("123456"),true);