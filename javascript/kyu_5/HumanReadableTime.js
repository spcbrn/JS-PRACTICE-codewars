
//URL: http://www.codewars.com/kata/human-readable-time
//kyu: 5


const humanReadable = (sec) => {
    let hours = Math.floor(sec/3600).toString()
    hours = hours.length === 1 ? '0' + hours : hours;
    sec -= hours*3600
    let minutes = Math.floor(sec/60).toString()
    minutes = minutes.length === 1 ? '0' + minutes : minutes;
    sec -= minutes*60;
    let seconds = sec.toString().length === 1 ? '0' + sec.toString() : sec.toString();
    let output = hours + ':' + minutes + ':' + seconds;
    return output;
}

console.log(humanReadable(0), '00:00:00');
console.log(humanReadable(5), '00:00:05');
console.log(humanReadable(60), '00:01:00');
console.log(humanReadable(86399), '23:59:59');
console.log(humanReadable(359999), '99:59:59');