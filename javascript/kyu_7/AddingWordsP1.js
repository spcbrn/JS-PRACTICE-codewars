
//URL: https://www.codewars.com/kata/adding-words-part-i
//kyu: 7

class Arith {
    constructor(value) {
      this.value = value;
        this.ref = {
            "zero":0,
            "one":1,
            "two":2,
            "three":3,
            "four":4,
            "five":5,
            "six":6,
            "seven":7,
            "eight":8,
            "nine":9,
            "ten":10,
            "eleven":11,
            "twelve":12,
            "thirteen":13,
            "fourteen":14,
            "fifteen":15,
            "sixteen":16,
            "seventeen":17,
            "eighteen":18,
            "nineteen":19,
            "twenty":20
        }
    }
    add(s) {
        let total = this.ref[s] + this.ref[this.value]
        for (var key in this.ref) {
            if (this.ref[key] === total) {
                return key
            }
        }
    }
}

let i = new Arith("three");

console.log(i.add("seven"), "ten");
console.log(i.add("eight"), "eleven");
console.log(i.add("zero"), "three");