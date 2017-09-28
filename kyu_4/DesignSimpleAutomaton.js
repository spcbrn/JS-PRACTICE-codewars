
//URL: http://www.codewars.com/kata/design-a-simple-automaton-finite-state-machine/javascript
//kyu: 4


function Automaton() {
   this.states = ['q1'];
}

Automaton.prototype.readCommands = function(commands) {
    let s = this.states;
    commands.forEach(c => {
        let sc = s[0]
        let n = c*1;
        if (sc === 'q3') {
            n ? s.unshift('q2') : s.unshift('q2');
            return;
        } else if (sc === 'q2') {
            n ? null : s.unshift('q3');
            return;
        } else if (sc === 'q1') {
            n ? s.unshift('q2') : null;
            return;
        }
    })
    return s[0] === 'q2' ? true : false;
}

var myAutomaton = new Automaton();






console.log(myAutomaton.readCommands(["1"]), true);
console.log(myAutomaton.readCommands(["1", "0", "0", "1"]), true);