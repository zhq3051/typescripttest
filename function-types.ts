interface SearchFunc {
    (source: string, substring: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, substring: string) {
    let result = source.search(substring);

    return result > 1;
}

// let mySearch1: SearchFunc;
// mySearch1 = function(src: string, sub: string) {
//     let result = src.search(sub);

//     return "wer";
// }