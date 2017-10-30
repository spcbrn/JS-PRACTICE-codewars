
//URL: https://www.codewars.com/kata/mysterious-function
//kyu: 6


const getNum = (n) => {
    let ref = {1:0, 2:0, 3:0, 4:0, 5:0, 6:1, 7:0, 8:2, 9:1, 0:1}
    let sum = 0;
    n.toString().split('').forEach(c=>sum+=ref[c])
    return sum;
}



console.log(getNum(300), 2);
console.log(getNum(90783), 4);
console.log(getNum(123321), 0);
console.log(getNum(89282350306), 8);
console.log(getNum(3479283469), 5);