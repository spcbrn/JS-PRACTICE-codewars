
//URL: https://www.codewars.com/kata/who-likes-it
//kyu: 6


const likes = (n) => {
    if (!n.length) {
        return 'no one likes this';
    } else if (n.length === 1) {
        return n[0] + ' likes this';
    } else if (n.length === 2) {
        return n[0] + ' and ' + n[1] + ' like this';
    } else if (n.length === 3) {
        return n[0] + ', ' + n[1] + ' and ' + n[2] + ' like this';
    } else {
        return n[0] + ', ' + n[1] + ' and ' + (n.length-2).toString() + ' others like this';
    }
}



console.log(likes([]), 'no one likes this');
console.log(likes(['Peter']), 'Peter likes this');
console.log(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
console.log(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');