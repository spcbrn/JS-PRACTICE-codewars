
//URL: http://www.codewars.com/kata/valid-braces/
//kyu: 4


const validBraces = (braces) => {
    let b = ['(', ')', '[', ']', '{', '}'];
    let bArr = braces.split('');
    if (braces.includes('({})')) {
      bArr.splice(0, 3);
    }
    let flag = false;
    for (let i = 0; i < bArr.length/2; i++) {
      let ref = b.indexOf(bArr[i]);
      if (bArr[i+1] === b[ref+1] || bArr[bArr.length-1-i] === b[ref+1]) {
        flag = true;
      } else {
        flag = false;
      }
    }
    return flag;
}

