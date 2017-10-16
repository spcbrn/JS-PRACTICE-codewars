
//URL: http://www.codewars.com/kata/directions-reduction
//kyu: 


const dirReduc = (a) => {
    let ops = {
        NORTH: 'SOUTH',
        SOUTH: 'NORTH',
        EAST: 'WEST',
        WEST: 'EAST'
    }
    for (i=0; i < a.length; i++) {
        if (a[i+1] === ops[a[i]]) {
            a.splice(i, 2);
            i = -1
        }
    }
    return a;
}const dirReduc = (a) => {
    let ops = {
        NORTH: 'SOUTH',
        SOUTH: 'NORTH',
        EAST: 'WEST',
        WEST: 'EAST'
    }
    for (i=0; i < a.length; i++) {
        if (a[i+1] === ops[a[i]]) {
            a.splice(i, 2);
            i = -1
        }
    }
    return a;
}



console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]), ["WEST"])
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]), ["NORTH", "WEST", "SOUTH", "EAST"])
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]), [])