

const range = (a,b) => {
    let output = [];
    for (let i = a; i <= b; i++) {
        output.push(i);
    }
    return output;
}



var mult=r=>r.reduce((a,b)=>a*b)
    , sum=r=>r.reduce((a,b)=>a+b)
    , sub=r=>r.reduce((a,b)=>a-b)
    , div=r=>r.reduce((a,b)=>a/b)


let testArr = [2, 2];

console.log(mult(testArr))
