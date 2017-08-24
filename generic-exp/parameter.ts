function getProterty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

//getProterty(x, "xx");
console.log(getProterty(x, "b"));

