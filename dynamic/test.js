const fn = n => {
    let a = 1, b = 2;

    while (--n)
        b += a, a = b - a;

    return a;
}


console.log(fn(process.argv.pop()))