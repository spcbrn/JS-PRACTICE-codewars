
//URL: http://www.codewars.com/kata/convert-string-to-camel-case
//kyu: 5


const toCamelCase = (s) => {
    let words = s.includes('-') ? s.split('-') : s.split('_');
    return words.map((c, i) => {
        if (i > 0) {
            return c[0].toUpperCase() + c.substr(1);
        }
        return c;
    }).join('');
}



console.log(toCamelCase(''), '')
console.log(toCamelCase("the_stealth_warrior"), "theStealthWarrior")
console.log(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior")
console.log(toCamelCase("A-B-C"), "ABC")