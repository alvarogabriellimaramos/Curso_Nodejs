const Fatorial = num => {
    let fatorial = 1;
    let nums = [];
    if (num === 0 || num === 1) return num;
    for (let c = num; c >= num;c--) {
        nums.push(c);
    };
    nums.reverse();
    for (let c = num; c >= nums.length;c--) {
        fatorial *= c
    };
    return fatorial
};

console.log(Fatorial(4))