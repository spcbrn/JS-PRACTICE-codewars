
//URL: https://www.codewars.com/kata/nesting-structure-comparison
//kyu: 4

Array.prototype.sameStructureAs = function (other) {
    let init = JSON.stringify(this).split('');
    let comp = JSON.stringify(other).split('');
    for (i = 0; i < comp.length; i++) {
        if (comp[i].match(/[\[\]]+/) && comp[i-1] === '"' && comp[i+1] === '"') {
            comp[i] = '0';
            init[i] = '0';
        }
    }
    let final = comp.map((c, i, a) => {
        if (!a.includes('[')) {
            return false;
        }
        if (c.match(/[\[\]]+/)) {
            return c === init[i]
        }
    })
    return !final.includes(false)
};


console.log([ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ]), true);
console.log([ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] ), true);