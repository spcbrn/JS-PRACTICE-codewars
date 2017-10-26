
//URL: https://www.codewars.com/kata/complementary-dna
//kyu: 7


// const DNAStrand = (dna) => {
//     return dna.replace(/A/g, 't').replace(/T/g, 'a').replace(/G/g, 'c').replace(/C/g, 'g').toUpperCase()
// }

const DNAStrand = (dna) => {
    let ref = {A:'T',T:'A',G:'C',C:'G'}
    return dna.split('').map(c=>ref[c]).join('')
}


console.log(DNAStrand("AAAA"),"TTTT");
console.log(DNAStrand("ATTGC"),"TAACG");
console.log(DNAStrand("GTAT"),"CATA");