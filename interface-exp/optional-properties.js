"use strict";
function createSquare(config) {
    var newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mysquare = createSquare({ color: 'black' });
//let mysquare = createSquare({coluor: 'black'});
var mysquare1 = createSquare({ color: 'white', opacity: 0.5 });
var squareOptions = { colour: "red", width: 100 };
var mySquare = createSquare(squareOptions);
console.log(mysquare);
