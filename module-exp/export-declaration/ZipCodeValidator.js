"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//export const numberRegexp = /^[0-9]+$/;
// export class ZipCodeValidator implements StringValidator  {
//     isAcceptable = function(s: string) {
//         return s.length === 5 && numberRegexp.test(s);
//     }
// }
exports.numberRegexp = /^[0-9]+$/;
var ZipCodeValidator = (function () {
    function ZipCodeValidator() {
        this.isAcceptable = function (s) {
            return s.length === 5 && exports.numberRegexp.test(s);
        };
    }
    return ZipCodeValidator;
}());
exports.ZipCodeValidator = ZipCodeValidator;
exports.ZCZ = ZipCodeValidator;
var ZipCodeValidator1 = (function () {
    function ZipCodeValidator1() {
        this.isAcceptable = function (s) {
            return s.length === 5 && exports.numberRegexp.test(s);
        };
    }
    return ZipCodeValidator1;
}());
exports.default = ZipCodeValidator1;
