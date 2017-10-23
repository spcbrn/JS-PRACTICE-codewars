
//URL: https://www.codewars.com/kata/scramblies
//kyu: 5


const scramble = (s1, s2) => {
    let log = '';
    let dic = s1.split('');
    let dicRef = s1;
    for (i = 0; i < s2.length; i++) {
        if (dicRef.includes(s2[i])) {
            log += s2[i];
            dic.splice(dic.indexOf(s2[i]), 1);
            dicRef = dic.join('')
        }
    }
    return log === s2
}





console.log(scramble('rkqodlw','world'),true);
console.log(scramble('cedewaraaossoqqyt','codewars'),true);
console.log(scramble('katas','steak'),false);
console.log(scramble('scriptjava','javascript'),true);
console.log(scramble('scriptingjava','javascript'),true);
console.log(scramble('scriptsjava','javascripts'),true);
console.log(scramble('jscripts','javascript'),false);
console.log(scramble('aabbcamaomsccdd','commas'),true);