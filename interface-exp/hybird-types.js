"use strict";
function getCounter() {
    var counter = function (st) { };
    counter.interval = 30;
    counter.reset = function () {
    };
    return counter;
}
