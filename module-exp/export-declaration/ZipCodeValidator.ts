interface StringValidator {
    isAcceptable(s: string): boolean;
}

//export const numberRegexp = /^[0-9]+$/;

// export class ZipCodeValidator implements StringValidator  {
//     isAcceptable = function(s: string) {
//         return s.length === 5 && numberRegexp.test(s);
//     }
// }

export const numberRegexp = /^[0-9]+$/;

class ZipCodeValidator implements StringValidator  {
    isAcceptable = function(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}

export default class ZipCodeValidator1 implements StringValidator  {
    isAcceptable = function(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}

export {ZipCodeValidator};
export {ZipCodeValidator as ZCZ};