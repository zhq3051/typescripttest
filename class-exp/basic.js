"use strict";
var greeter = (function () {
    function greeter(message) {
        this.greeting = message;
    }
    greeter.prototype.greet = function () {
        return "hello, " + this.greeting;
    };
    return greeter;
}());
var person = new greeter('zeke');
console.log(person.greet());
