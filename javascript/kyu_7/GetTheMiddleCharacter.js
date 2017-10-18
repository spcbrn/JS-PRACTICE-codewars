
//URL: http://www.codewars.com/kata/get-the-middle-character
//kyu: 7


const getMiddle = (n) => {
    return n.length%2 ? n.substr(Math.floor(n.length/2), 1) : n.substr(n.length/2-1, 2)
}



console.log(getMiddle("test"),"es");
console.log(getMiddle("testing"),"t");
console.log(getMiddle("middle"),"dd");
console.log(getMiddle("A"),"A");