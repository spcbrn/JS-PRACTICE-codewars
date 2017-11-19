
//URL: https://www.codewars.com/kata/penalty-for-speeding
//kyu: 5


const penalty = (input, next, output) => {
  next = next ? next : input.sort()[0].charAt(0);
  let currentSequence = input.filter((c,i,a) => c.charAt(0) === next).sort((a,b) => a+b)
  let map = {};
  let sortValue = [];
  let sortOrder = [];
  let final = [];
  currentSequence.forEach(c => {
    let sum = c.length > 1 ? c.slice(0,2).split('').reduce((a,b)=>a*1+b*1) : c*1 + c*1;
    map[c] = sum;
    sortOrder.push(sum)
  })
  console.log(map)
  sortOrder.sort().forEach(c => {
    let keys = [];
    for (let key in map) {
      if (map[key] === c) {

        console.log(key)
        final.push(key)
      }
    }
  })
  console.log(final)
}


// console.log(penalty([ '15',
//   '23',
//   '26',
//   '28',
//   '3',
//   '30',
//   '32',
//   '34',
//   '35',
//   '36',
//   '56',
//   '63',
//   '65',
//   '7',
//   '8',
//   '81',
//   '84',
//   '87',
//   '91',
//   '94',
//   '94' ]), '152326283032334353656636578184878919494')

// console.log(penalty(['45', '30', '50', '1']), '1304550')
console.log(penalty(['100', '10', '1']), '100101')
console.log(penalty(['45', '4', '40']), '3404445')
// console.log(penalty(['32', '3']), '323')
// console.log(penalty(['70', '46', '4', '19']), '1944670')
// console.log(penalty(['71', '82', '42', '34', '90']), '3442718290')
// console.log(penalty(['31', '97', '6', '78']), '3167897')
