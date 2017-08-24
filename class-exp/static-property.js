"use strict";
var Greeter = (function () {
    function Greeter() {
    }
    Greeter.prototype.greet = function () {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter.standardGreeting;
        }
    };
    Greeter.standardGreeting = "Hello, there";
    return Greeter;
}());
var greeter1;
greeter1 = new Greeter();
console.log(greeter1.greet());
//let greeterMaker: typeof Greeter = Greeter;
var greeterMaker = Greeter;
greeterMaker.standardGreeting = "Hey there!2222";
var greeter2 = new greeterMaker();
console.log(greeter2.greet());
