
//URL: https://www.codewars.com/kata/strings-mix
//kyu: 4

const mix = (s1, s2) => {
    let temp = [];
    let output = [];
    let ref = {1:{}, 2:{}};
    let m1 = s1.match(/[a-z]/g).sort()
    let m2 = s2.match(/[a-z]/g).sort()
    const parseIn = (a, n) => {
        let current;
        let count = 0;
        a.forEach((c, i) => {
            if (current !== c) {
                if (count > 1) {
                    ref[n][current] = count
                    count = 0;
                }
                count = 0;
                current = c;
                count++;
                return;
            } else if (i === a.length-1) {
                count++
                ref[n][c] = count
                return;
            } else {
                count++
            }
        })
    }
    const parseOut = (a) => {
        if (!temp.length) {
            return;
        }
        let add = [];
        let len = a.sort((a,b) => b.length - a.length)[0].length
        for (i=0; i<a.length; i++) {
            if (a[i].length === len) {
                add.push(a[i])
                temp.splice(i, 1)
                i--
            }
        }
        output.push(...add.sort())
        parseOut(a)
    }
    parseIn(m1, '1')
    parseIn(m2, '2')
    let focus = Object.keys(ref['1']).length > Object.keys(ref['2']).length ? '1' : '2';
    let compare = focus === '1' ? '2' : '1'
    for (l in ref[focus]) {
        let acc = ''
        if (ref[compare][l]) {
            if (ref[focus][l] > ref[compare][l]) {
                for (i=0;i<ref[focus][l];i++) {
                    acc += l;
                }
                temp.push(focus + ':' + acc);
            } else if (ref[focus][l] < ref[compare][l]){
                for (i=0;i<ref[compare][l];i++) {
                    acc += l
                }
                temp.push(compare + ':' + acc)
            } else {
                for (i=0;i<ref[focus][l];i++) {
                    acc += l
                }
                temp.push('=:' + acc)
            }
        } else {
            for (i=0;i<ref[focus][l];i++) {
                acc += l;
            }
            temp.push(focus + ':' + acc);
        }
    }
    for (l in ref[compare]) {
        let acc = '';
        if (!ref[focus][l]) {
            for (i=0;i<ref[compare][l];i++) {
                acc += l
            }
            temp.push(compare + ':' + acc)
        }
    }
    if (!temp.length) {
        return ''
    }
    parseOut(temp)
    return output.join('/')
}





console.log(mix("Are they here", "yes, they are here") === "2:eeeee/2:yy/=:hh/=:rr")
console.log(mix("looping is fun but dangerous", "less dangerous than coding") === "1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg")
console.log(mix(" In many languages", " there's a pair of functions") === "1:aaa/1:nnn/1:gg/2:ee/2:ff/2:ii/2:oo/2:rr/2:ss/2:tt")
console.log(mix("Lords of the Fallen", "gamekult") === "1:ee/1:ll/1:oo")
console.log(mix("codewars", "codewars") === "")
console.log(mix("A generation must confront the looming ", "codewarrs") === "1:nnnnn/1:ooooo/1:tttt/1:eee/1:gg/1:ii/1:mm/=:rr")