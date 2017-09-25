
//URL: https://www.codewars.com/kata/consonant-value/train/javascript
//kyu: 6



function solve(s) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let sArray = s.split('');
    let vFlag = false;
    let final = 0;
    let acc = 0;
    let curr = 0;
    sArray.forEach((c, i, a) => {
        if (vowels.includes(c)) {
            sArray[i] = 0;
            acc = 0;
            vFlag = true;
        } else {
            vFlag = false;
            sArray[i] = c.charCodeAt(0) - 96;
            if (!vFlag) {
                acc += sArray[i]
            } else if (vFlag) {
                curr = sArray[i]
            }
            final = curr > final ? curr : final;
            final = acc > final ? acc : final;
        }
    })
    return final;
  };






    console.log(solve("zodiac"),26);
    console.log(solve("codewars"),37);
    console.log(solve("chruschtschov"),80);
    console.log(solve("khrushchev"),38);
    console.log(solve("strength"),57);
    console.log(solve("catchphrase"),73);
    console.log(solve("twelfthstreet"),103);
    console.log(solve("mischtschenkoana"),80);
