interface SearchFunc {
    (source: string, substring: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function (source: string, substring: string) {
    let result = source.search(substring);

    return result > 1;
}

// let mySearch1: SearchFunc;
// mySearch1 = function(src: string, sub: string) {
//     let result = src.search(sub);

//     return "wer";
// }


let mySearch2 = <SearchFunc>function (source: string, substring: string) {
    let result = source.search(substring);

    return result > 1;
}

console.log(mySearch2('this is a world', 'world1'));