
//URL: https://www.codewars.com/kata/tank-truck
//kyu: 


const tankvol = (h, d, vt) => {
    let rad = d/2;
    let o = 2 * (Math.acos((rad-h)/rad));
    let l = vt/(Math.PI*Math.pow(rad, 2))
    let a = Math.floor(((1/2) * Math.pow(rad, 2) * (o-Math.sin(o))) * l);
    return a;
}



console.log(tankvol(5, 7, 3848), 2940)
console.log(tankvol(2, 7, 3848), 907)
console.log(tankvol(40, 120, 3500), 1021)