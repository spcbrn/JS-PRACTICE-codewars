
//URL: https://www.codewars.com/kata/beginner-series-number-2-clock/train/javascript
//kyu: 8


const past = (h, m, s) => (h*3600 + m*60 + s)*1000



console.log(past(0,1,1),61000)
console.log(past(1,1,1),3661000)
console.log(past(0,0,0),0)
console.log(past(1,0,1),3601000)
console.log(past(1,0,0),3600000)