
//URL: https://www.codewars.com/kata/indexed-capitalization
//kyu: 7


function capitalize(s,arr){
    let sArr = s.split('');
    arr.forEach(c => {
      if (c < sArr.length) {
        sArr[c] = sArr[c].toUpperCase()
      }
    })
    return sArr.join('');
};


console.log(capitalize("abcdef",[1,2,5]),'aBCdeF');
console.log(capitalize("abcdef",[1,2,5,100]),'aBCdeF');
console.log(capitalize("codewars",[1,3,5,50]),'cOdEwArs');
console.log(capitalize("abracadabra",[2,6,9,10]),'abRacaDabRA');
console.log(capitalize("codewarriors",[5]),'codewArriors');
console.log(capitalize("indexinglessons",[0]),'Indexinglessons');