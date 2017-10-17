
//URL: https://www.codewars.com/kata/5963caa2cb97be79630000c0
//kyu: 6


String.prototype.eqAll = function() {
    let flag = true;
    let base = this[0];
    this.split('').forEach(c => {
        if (c !== base) {
            flag = false;
        }
    })
    return flag;
}

Array.prototype.eqAll = function() {
    let flag = true;
    let base = this[0];
    this.forEach(c => {
        if (c !== base) {
            flag = false;
        }
    })
    return flag;
}



console.log( "aaaaa".eqAll(), true );
console.log( "abcde".eqAll(), false );
console.log( "".eqAll(), true );
console.log( [0,0,0].eqAll(), true );
console.log( [0,1,2].eqAll(), false );
console.log( [].eqAll(), true );