interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter> function(st: number) {
    };
    counter.interval = 30;
    counter.reset = function(){
        counter.interval = 0;
    }

    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5;