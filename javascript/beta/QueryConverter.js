
//URL: https://www.codewars.com/kata/query-converter
//kyu: ?


const solution = (s) => {
  let output = {};
  s.split('?')[1].split('&').forEach(c => {
    let query = c.split('=');
    output[query[0]] = query[1]
  })
  return output;
}



console.log(solution('www.whatsup.com?name=Huy&lastname=dang'), {name: "Huy", lastname: "dang"});
console.log(solution('www.whatsup.com?name=Sam&age=29'), {name: "Sam", age: '29'});
console.log(solution('www.whatsup.com?shoe=Nike&size=11'), {shoe: "Nike", size: '11'});
console.log(solution('www.whatsup.com?brand=Coach&itemId=9123'), {brand:"Coach", itemId:'9123'});
console.log(solution('www.whatsup.com?make=Honda&model=Civic'), {make: 'Honda', model: 'Civic'});
console.log(solution('www.whatsup.com?item=iphone&gen=X'), {item:'iphone', gen:'X'});
