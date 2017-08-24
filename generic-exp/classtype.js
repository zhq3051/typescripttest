"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function create(c) {
    return new c();
}
var Beekeeper = (function () {
    function Beekeeper() {
    }
    return Beekeeper;
}());
var ZooKeeper = (function () {
    function ZooKeeper() {
    }
    return ZooKeeper;
}());
var AnimalP = (function () {
    function AnimalP() {
    }
    return AnimalP;
}());
var Bee = (function (_super) {
    __extends(Bee, _super);
    function Bee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bee;
}(AnimalP));
var Lion = (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Lion;
}(AnimalP));
var BeekeeperQuto = (function () {
    function BeekeeperQuto() {
    }
    return BeekeeperQuto;
}());
function createInstance1(c) {
    return new c();
}
var objl = createInstance1(Lion);
var k = new ZooKeeper();
objl.keeper = k;
objl.keeper.nameTag = "see";
console.log(objl.keeper.nameTag);
//createInstance1(Lion).keeper.nameTag;
//createInstance1(Bee).keeper.hasMask;
//console.log( createInstance1(BeekeeperQuto).hasMask1);
var GenericNumber1 = (function () {
    function GenericNumber1() {
    }
    return GenericNumber1;
}());
