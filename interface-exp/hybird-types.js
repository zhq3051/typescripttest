"use strict";
function getCounter1() {
    var counter = function (st) { };
    counter.interval = 30;
    counter.reset = function () {
    };
    return counter;
}
