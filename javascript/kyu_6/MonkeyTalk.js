
//URL: https://www.codewars.com/kata/monkey-talk
//kyu: 6


const monkeyTalk = (s) => {
    let syn = s.split(' ');
    let output = '';
    syn.forEach(c => {
        if (c[c.length-1] === 'o') {
            output += 'ook ';
        } else if (c[c.length-1] === 'e') {
            output += 'eek ';
        }
    })
    return output.charAt(0).toUpperCase() + output.slice(1, -1) + '.'
}



console.log(monkeyTalk('Hello'), 'Ook.');
console.log(monkeyTalk('Everyone'), 'Eek.');
console.log(monkeyTalk('Hello Everyone'), 'Ook eek.');
console.log(monkeyTalk('Everyone Hello'), 'Eek ook.');