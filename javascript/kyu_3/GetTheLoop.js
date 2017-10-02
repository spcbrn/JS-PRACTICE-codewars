//URL: https://www.codewars.com/kata/can-you-get-the-loop/javascript
//kyu: 3



function loop_size(node) {
    let count = 1;
    let finished = false;
    let clearing = false;
    let current = node;
    while (!finished) {
        if (!clearing) {
          current.count = count;
          if (!current.next.count) {
            current = current.getNext();
            count++
          } else if (current.next.count) {
            count -= (current.next.count - 1)
            current = node;
            clearing = true;
          }
        }
        if (clearing) {
          if (current.count) {
            delete current.count;
            current = current.getNext()
          } else if (!current.count) {
            finished = true;
          }
        }
    }
    return count;
}