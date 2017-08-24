"use strict";
function getCounter() {
    var counter = function (st) {
    };
    counter.interval = 30;
    counter.reset = function () {
        counter.interval = 0;
    };
    return counter;
}
var c = getCounter();
c(10);
c.reset();
c.interval = 5;
