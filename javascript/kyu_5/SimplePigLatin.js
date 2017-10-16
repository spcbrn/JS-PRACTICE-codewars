
//URL: http://www.codewars.com/kata/simple-pig-latin
//kyu: 5


const pigIt = (s) => {
    return s.split(' ').map(c => c.substr(1) + c[0] + 'ay').join(' ');
}



console.log(pigIt('Pig latin is cool'),'igPay atinlay siay oolcay')
console.log(pigIt('This is my string'),'hisTay siay ymay tringsay')