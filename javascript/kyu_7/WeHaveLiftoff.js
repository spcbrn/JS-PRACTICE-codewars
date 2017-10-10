
//URL: https://www.codewars.com/kata/we-have-liftoff
//kyu: 7


const liftoff = (ins) => {
    return ins.sort((a, b) => a < b).join(' ') + ' liftoff!'
}



console.log(liftoff([2, 8, 10, 9, 1, 3, 4, 7, 6, 5]),"10 9 8 7 6 5 4 3 2 1 liftoff!")