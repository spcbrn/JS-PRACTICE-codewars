
//URL: http://www.codewars.com/kata/valid-parentheses
//kyu: 5


const validParentheses = (s) => {
    if (s[0] === ')' || s[s.length-1] === '(') {
        return false;
    }
    let log = [];
    s.split('').forEach(c => {
        if (c.match(/[(]/)) {
            (log.length && log.includes(')')) ? log.pop() : log.push(c)
        } else if (c.match(/[)]/)) {
            (log.length && log.includes('(')) ? log.pop() : log.push(c)
        }
    })
    return log.length ? false : true;
}



console.log(validParentheses( "()" ), true);
console.log(validParentheses( "())" ), false);
console.log(validParentheses("(())((()())())"), true);
console.log(validParentheses(")(()))"), false);
console.log(validParentheses('())('), false)