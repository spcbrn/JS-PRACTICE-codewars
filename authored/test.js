
//create a function that checks whether a set of WEP keys, passed in as pairs of characters concatenated into a single string, are valid in representing ONLY words (characters a-z and A-Z), spaces, and the integers 1-9
//if it is determined that each WEP key in the string represents an allowed character, return true
//if any of the keys contain OR represent invalid characters, return false
//if the string does not contain only two-character pairs, return false

//***note that not all input strings will contain capitalized letters!


//in any given WEP key pair, the first character must only be an integer in the range 2-7
//if the first character is the integer 2, the second character must only be the integer 0 (this pair represents a space)
//if the first character is the integer 3, the second character must only be an integer 0-9 (these pairs represent integers)
//if the first character is an integer in the range 4-7, the second character must only be an integer in the range 0-9 OR an alphabetic character in the range A-F (these pairs represent alphabetic characters a-z and A-Z)

/*example WEP breakdown:
'H' => '48'
'h' => '68'
'4' => '34'
' ' => '20'
'Hello World' => '48656C6C6F20576F726C64'
*/

let validate = (codes) => {
    
}




//Test cases   (ti === testInput)

console.log(validate(['686920687579']), true);
console.log(validate(['6869206368726973']), true);
console.log(validate(['70726F6772616D6D696E67']), true);
console.log(validate(['696E74657266616365']), true);
console.log(validate(['3320626C696E64206D696365']), true);
console.log(validate(['6C333374737033346B']), true);
console.log(validate(['7065616E75742062757474657220616E64206A656C6C79']), true);
