"use strict";
function getProterty(obj, key) {
    return obj[key];
}
var x = { a: 1, b: 2, c: 3, d: 4 };
//getProterty(x, "xx");
console.log(getProterty(x, "b"));
