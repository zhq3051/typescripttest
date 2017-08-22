interface ClockInterface {
    currentime: Date;
    setTime(d: Date) : void;
}

class clocek implements ClockInterface {
    currentime: Date;

    setTime(d: Date) {
        this.currentime = d;
    }

    constructor(h: number, m: number) {

    }
}



