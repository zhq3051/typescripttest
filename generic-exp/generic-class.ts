class GenericNUmber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNUmber<number>();
myGenericNumber.zeroValue = 2;
myGenericNumber.add = function (x, y) { return x + y };

console.log(myGenericNumber.add(3, 5));