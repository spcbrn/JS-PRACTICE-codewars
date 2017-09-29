
//URL: http://www.codewars.com/kata/strip-url-params
//kyu: 4


const stripUrlParams = (url, params) => {
    let baseUrl = url.includes('?') ? url.split('?') : [];
    let pArray = baseUrl.length ? baseUrl[1].split('&') : [];
    pArray = pArray.filter((c,i,a) => {
        for (j = 0; j < a.length; j++) {
            if (c[0] === a[j][0] && i !== j) {
                pArray.splice(j, 1)
            }
        }
        return params ? c[0] !== params[0] : c;
    })
    let output = pArray.length ? baseUrl[0] + '?' + pArray.join('&') : url
    return output;
}






console.log(stripUrlParams('www.codewars.com?a=1&b=2&a=2'), 'www.codewars.com?a=1&b=2')
console.log(stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b']), 'www.codewars.com?a=1')
console.log(stripUrlParams('www.codewars.com?a=1&b=2&a=1&b=3', ['b']))
console.log(stripUrlParams('www.codewars.com?a=1&b=3', ['b']), 'www.codewars.com?a=1')
console.log(stripUrlParams('www.codewars.com', ['b']), 'www.codewars.com')