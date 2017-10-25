
function example1() {
    var person = {
        name: 'Edward',
        trade: 'Developer'
    };
    return person
}

console.log(example1())


function ExampleConstructor(name, trade) {
    this.name = name;
    this.trade = trade;
    return {
        name: this.name,
        trade: this.trade
    }
}

var edward = new ExampleConstructor('Edward', 'Developer')
var chris = new ExampleConstructor('Chris', 'Hacker')

var now = new Date()

console.log(now)

console.log(edward)
console.log(chris)