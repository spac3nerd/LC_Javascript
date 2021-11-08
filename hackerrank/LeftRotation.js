function rotLeft(a, d) {
    while (d > 0) {
        let t = a.shift();
        a.push(t);
        d--;
    }
    return a;
}
