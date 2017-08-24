"use strict";
var GenericNUmber = (function () {
    function GenericNUmber() {
    }
    return GenericNUmber;
}());
var myGenericNumber = new GenericNUmber();
myGenericNumber.zeroValue = 2;
myGenericNumber.add = function (x, y) { return x + y; };
console.log(myGenericNumber.add(3, 5));
