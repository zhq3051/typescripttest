function create<T>(c: {new(): T ;}): T {
    return new c();
}

class Beekeeper
{
    hasMask: boolean;
}

class ZooKeeper
{
    nameTag: string;
}

class AnimalP
{
    numLegs: number;
}

class Bee extends AnimalP{
    keeper: Beekeeper;
}

class Lion extends AnimalP{
    keeper: ZooKeeper;
    name: string;
}

class BeekeeperQuto
{
    hasMask1: boolean;
    numLegs: number;
}

function createInstance1<A extends AnimalP>(c: new() => A): A {
    return new c();
}

let objl = createInstance1(Lion);
let k = new ZooKeeper();
objl.keeper = k;
objl.keeper.nameTag = "see";
console.log(objl.keeper.nameTag);
//createInstance1(Lion).keeper.nameTag;
//createInstance1(Bee).keeper.hasMask;
//console.log( createInstance1(BeekeeperQuto).hasMask1);


class GenericNumber1<T> {
    zeroValue: T;
    add: (x: T, y: T) => boolean;
}