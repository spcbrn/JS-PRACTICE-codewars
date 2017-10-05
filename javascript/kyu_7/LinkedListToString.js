
//URL: https://www.codewars.com/kata/convert-a-linked-list-to-a-string
//kyu: 7


// function stringify(list) {
//     if (!list) {
//       return 'null';
//     }
//     if(!list.next) {
//       return list.data.toString() + ' -> null';
//     }
//     let output = list.data.toString() + ' -> ';
//     let current = list.next ? list.next : null;
//     while (current.next) {
//       output += (current.data.toString() + ' -> ')
//       current = current.next;
//     }
//     return output + current.data.toString() + ' -> ' + (current.next ? current.next : null)
// }

function stringify(list) {
    return list === null ? "null" : `${list.data} -> ${stringify(list.next)}`;
  }



console.log(stringify(new Node(1, new Node(2, new Node(3)))), "1 -> 2 -> 3 -> null");
console.log(stringify(new Node(0, new Node(1, new Node(4, new Node(9, new Node(16)))))), "0 -> 1 -> 4 -> 9 -> 16 -> null");
console.log(stringify(null), "null");