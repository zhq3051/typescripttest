interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter1(): Counter {
    let counter = <Counter> function(st: number) {};
    counter.interval = 30;
    counter.reset = function(){

    }

    return counter;
}