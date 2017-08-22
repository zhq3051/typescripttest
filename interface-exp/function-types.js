"use strict";
var mySearch;
mySearch = function (source, substring) {
    var result = source.search(substring);
    return result > 1;
};
// let mySearch1: SearchFunc;
// mySearch1 = function(src: string, sub: string) {
//     let result = src.search(sub);
//     return "wer";
// }
var mySearch2 = function (source, substring) {
    var result = source.search(substring);
    return result > 1;
};
console.log(mySearch2('this is a world', 'world1'));
