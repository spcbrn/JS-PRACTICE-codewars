
//URL: https://www.codewars.com/kata/most-consecutive-zeros-of-a-binary-number
//kyu: 6


const maxConsecZeros= (n) => {
    let ref = {
        0:'Zero',
        1:'One',
        2:'Two',
        3:'Three',
        4:'Four',
        5:'Five',
        6:'Six',
        7:'Seven',
        8:'Eight',
        9:'Nine',
        10:'Ten',
        11:'Eleven',
        12:'Twelve',
        13:'Thirteen'
    };
    let longest = '';
    (n*1).toString(2).split('1').forEach(c => longest = c.length > longest ? c.length : longest);
    return longest ? ref[longest] : ref[0];
}



console.log(maxConsecZeros("7"), "Zero");
console.log(maxConsecZeros("33"), "Four");
console.log(maxConsecZeros("77"), "Two");
console.log(maxConsecZeros("100"), "Two");
console.log(maxConsecZeros("105"), "Two");
console.log(maxConsecZeros("113"), "Three");
console.log(maxConsecZeros("160"), "Five");
console.log(maxConsecZeros("180"), "Two");
console.log(maxConsecZeros("223"), "One");
console.log(maxConsecZeros("256"), "Eight");
console.log(maxConsecZeros("777"), "Four");
console.log(maxConsecZeros("992"), "Five");
console.log(maxConsecZeros("1024"), "Ten");
console.log(maxConsecZeros("1037"), "Six");
console.log(maxConsecZeros("1088"), "Six");
console.log(maxConsecZeros("2017"), "Four");
console.log(maxConsecZeros("2048"), "Eleven");
console.log(maxConsecZeros("3050"), "One");
console.log(maxConsecZeros("4096"), "Twelve");
console.log(maxConsecZeros("6144"), "Eleven");
console.log(maxConsecZeros("6656"), "Nine");
console.log(maxConsecZeros("7188"), "Five");
console.log(maxConsecZeros("8192"), "Thirteen");
console.log(maxConsecZeros("9999"), "Four");
console.log(maxConsecZeros("10000"), "Four");