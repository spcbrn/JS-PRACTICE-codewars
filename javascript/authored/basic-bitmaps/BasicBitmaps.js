const toBits = (set) => {
    let vals = set.split('\n')
    let bitmap = [];
    for (i=0; i < 5000; i++) {
        bitmap[i] = 0;
    }
    for (i=0; i < vals.length; i++) {
        bitmap[vals[i]] = 1
    }
    return bitmap;
}

