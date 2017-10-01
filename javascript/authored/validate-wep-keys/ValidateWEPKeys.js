
/*
TASK:
create a function that checks whether a set of WEP keys, passed in as multiple keys (two-character pairs) concatenated into a single string, are valid in representing ONLY words (characters a-z and A-Z), spaces, and integers 1-9

RULES:
if it is determined that each WEP key in the string represents an allowed character, return true

if any of the keys contain OR represent invalid characters, return false

if the string does not contain only two-character pairs, return false


KEY CONSTRAINTS:
in any given WEP key pair, the first character must only be an integer in the ranges 2-7
if the first character is the integer 2, the second character must only be the integer 0 (this pair represents a space)
if the first character is the integer 3, the second character must only be an integer 0-9 (these pairs represent integers)
if the first character is an integer in the range 4-6, the second character must only be an integer in the range 0-9, OR an alphabetic character in the range A-F (these pairs represent alphabetic characters a-o and A-Z)
if the first character is the integer 7, the second character must only be an integer in the range 0-9, OR the alphabetic character A (these pairs represent alphabetic characters p-z)

*note that WEP keys are not case sensitive, so input strings may contain both capital and lowercase letters!
(for example, '6E' === '6e')


example WEP key breakdown:
'H' => '48'
'h' => '68'
'4' => '34'
' ' => '20'
'Hello World' => '48656C6C6F20576F726C64'


Good luck!  And if you'd like to add another language to this kata, please let me know!
*/

let validate = (keys) => {
    let keyArray = [];
    let temp = [];
    for (i = 0; i < keys.length; i++) {
        if (temp.length === 2) {
            keyArray.push(temp);
            temp = [];
        } else if (i > keys.length - 2) {
            keyArray.push(temp)
        }
        temp.push(keys[i].toUpperCase())
    }
    keyArray.forEach((c, i, a) => {
        if (keys.length % 2) {
            a[i] = false;
        } else if (!c[0].match(/[2-7]+/)) {
            a[i] = false;
        } else if (c[0] === '2') {
            a[i] = c[1] === '0' ? true : false;
        } else if (c[0] === '3') {
            a[i] = c[1].match(/\d/) ? true : false;
        } else if (c[0].match(/[4-6]+/)) {
            a[i] = (c[1].match(/\d/) || c[1].match(/[A-F]+/)) ? true : false;
        } else if (c[0] === '7') {
            a[i] = (c[1].match(/\d/) || c[1] === 'A') ? true : false;
        }
    })
    
    return keyArray.includes(false) ? false : true;
}



//test cases

//true
console.log(validate('686920687579'), true);
console.log(validate('6869206368726973'), true);
console.log(validate('70726F6772616D6D696E67'), true);
console.log(validate('696e74657266616365'), true);
console.log(validate('3320626C696E64206D696365'), true);
console.log(validate('6c333374737033346b'), true);
console.log(validate('7065616E75742062757474657220616e64206A656C6C79'), true);
console.log(validate('7965737A656272617965737A656272617965737A656272617965737A656272617965737A65627261'), true);
console.log(validate('3030373135303063303037'), true);
console.log(validate('3534337a326435653973366131623868'), true);
console.log(validate('6865696e643834376169643761736b66'), true);
console.log(validate('7468317331737433737474683173317374337374746831733173743373747468317331737433737474683173317374337374'), true);

//false
console.log(validate('68692068757'), false, 'contains uneven pairs');
console.log(validate('3320626C696J64206D696365'), false, 'contains invalid character');
console.log(validate('6C133374737033346B'), false, 'contains invalid character');
console.log(validate('7965737B65627261'), false, 'contains multiple invalid characters');
console.log(validate('68656c6c6f2c3a61736466'), false, 'contains multiple invalid characters');
console.log(validate('7377616d706361747a2d62656177616d706361747a2d62656174'), false, 'contains invalid key');
console.log(validate('30303769733030636f2a6c'), false, 'contains invalid key');
console.log(validate('617364663635646636356466363564663635646636356466363564663635312f643522646473'), false, 'contains multiple invalid keys');
console.log(validate('74686973347233636FF6C'), false, 'contains uneven pairs');
console.log(validate('71756166717561671756166'), false, 'contains uneven pairs');
console.log(validate('KDNBKS9Z8DNAEUBNASDFI'), false, 'contains random invalid characters');
console.log(validate('74683173317384337374'), false, 'contains invalid character');
console.log(validate('3534337a326435,53973366131623868'), false, 'contains invalid character');
console.log(validate('3320626C696E642,6D696365'), false, 'contains invalid character');
