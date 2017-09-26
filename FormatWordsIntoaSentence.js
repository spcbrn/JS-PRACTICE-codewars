
//URL: https://www.codewars.com/kata/format-words-into-a-sentence/train/javascript
//kyu: 6


function formatWords(w) {
    if (!w || !w.length) {
        return '';
    }
    wArr = w.map(c => c)
    let final = '';
    wArr.forEach((c, i) => {
        if (!c) {
            null;
        } else if (i === 0) {
            final += c;
        } else if (i === w.length - 1) {
            final += (' and ' + c);
        } else {
            final += (', ' + c);
        }
    })
    return final;
}