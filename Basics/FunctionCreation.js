let ns = naturalSum(10);

function naturalSum(N) {
    let sum = 0;
    for (let i = 1; i <= N; i++) {
        sum += i;
    }
    return sum;
    // no need to specify return type
}

console.log(ns);