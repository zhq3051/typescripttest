interface ClockConstructor {
    new (hour: number, minute: number) : ClockInterface1;
}

interface ClockInterface1 {
    tick() : void;
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface1 {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface1 {
    constructor(h: number, m: number){

    }

    tick(){
        console.log('beep beep');
    }
}

class AnalogClock implements ClockInterface1 {
    constructor(h: number, m: number) { }
    tick() {
        console.log("tick tock");
    }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);

digital.tick();
analog.tick();