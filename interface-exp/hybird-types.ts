interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter> function(st: number) {};
    counter.interval = 30;
    counter.reset = function(){

    }

    return counter;
}