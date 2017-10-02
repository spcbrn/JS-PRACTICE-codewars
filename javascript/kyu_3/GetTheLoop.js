//URL: https://www.codewars.com/kata/can-you-get-the-loop/javascript
//kyu: 3



function loop_size(node) {
    let flag = 1;
    let finished = false;
    let clearing = true;
    let count;
    let current = node;
    while (!finished) {
        current.flag = flag;
        if (!current.next.flag) {
            current = current.getNext();
            flag++
        } else if (current.next.flag) {
            count = flag - (current.next.flag - 1)
            finished = true;
        }
    }
    current = node;
    while (clearing) {
        if (current.flag) {
            delete current.flag;
            current = current.getNext()
        } else if (!current.flag) {
            clearing = false;
        }
    }
    return count;
}