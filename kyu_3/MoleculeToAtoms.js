
//URL: https://www.codewars.com/kata/molecule-to-atoms
//kyu: 3


const parseMolecule = (m) => {
    let output = {};
    let sequence = m.split('');
    let brackets = {
        '{': '}',
        '(': ')',
        '[': ']'
    }
    let atoms = [];
    let count = 1;
    let lastElement = '';
    let nest = [];
    sequence.forEach((c,i,a) => {
        if (c.match(/[{([]+/g)) {
            nest.push(c);
        } else if (c.match(/[A-Z]/)) {
            atoms.push(c);
            if (i < a.length - 1 && a[i+1].match(/[A-Z]/)) {
                return
            } else if (i < a.length - 1 && a[i+1].match(/\d/) && !nest.length) {
                output[atoms[0]] = parseInt(a[i+1]);
                atoms = [];
                return;
            } else if (i < a.length - 1 && a[i+1].match(/\d/) && nest.length) {
                atoms.forEach(c => output[c] = atoms.indexOf(c) === atoms.length-1 ? output[c] ? ((parseInt(a[i+1])*parseInt(a[sequence.indexOf(brackets[nest[0]])+1])) * output[c]) + output[c] : (parseInt(a[i+1])*parseInt(a[sequence.indexOf(brackets[nest[0]])+1])) : parseInt(a.indexOf(atoms[atoms.length-1])+1));
                atoms = [];
                return;
            } else if (i < a.length - 1 && a[i+1].match(/[{([]+/g)) {
                if (!nest.length) {
                    atoms.forEach(c => output[c] = 1)
                    atoms = []
                    return;
                } else if (nest.length) {
                    atoms.forEach(c => output[c] = parseInt(a[sequence.indexOf(brackets[nest[0]])+1]))
                    nest.splice(0,1);
                    atoms=[];
                    return;
                }
            } else if (i < a.length - 2 && a[i+1].match(/[})[\]]+/g) && nest.length < 2) {
                atoms.forEach(c => output[c] = parseInt(a[i+2]))
            } else if (i === a.length - 1) {
                output[atoms[0]] = 1;
                atoms = [];
            }
        } else if (c.match(/[a-z]/)) {
            atoms[atoms.length-1] += c;
            if (a[i+1].match(/[{([]+/g) && !nest.length) {
                output[atoms[0]] = 1;
                atoms = [];
                return;
            }
        } else if (c.match(/\d/g)) {
            if (nest) {

            }
        }
    })
    return output;
}
// console.log(''.match(/[{}()[\]]+/g) ? true : false)
var water = 'H2O';
console.log(parseMolecule(water), {H: 2, O: 1});

var magnesiumHydroxide = 'Mg(OH)2';
console.log(parseMolecule(magnesiumHydroxide), {Mg: 1, O: 2, H: 2});

var fremySalt = 'K4[ON(SO3)2]2';
console.log(parseMolecule(fremySalt), {K: 4, O: 14, N: 2, S: 4});