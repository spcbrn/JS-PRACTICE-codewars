
//URL: https://www.codewars.com/kata/pascals-triangle
//kyu: 4


const pascalsTriangle = (n) => {
    let tri = {
        0: [1],
        1: [1,1]
    }
    let depth = 2;
    while (depth <= n-1) {
        tri[depth] = [];
        for (i = 0; i <= depth; i++) {
            if (i === 0 || i === depth) {
                tri[depth].push(1)
            } else {
                let val = tri[depth-1][i-1] + tri[depth-1][i]
                tri[depth].push(val)
            }
        }
        depth++
    }
    let output = []
    for (lev in tri) {
        output = output.concat(tri[lev])
    }
    return n > 1 ? output : [1];
}



console.log(pascalsTriangle(4), [1,1,1,1,2,1,1,3,3,1])