interface Shape{
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke{
    sideLength: number;
}



let square = <Square>{};
square.color = 'white';
square.sideLength = 100;

square.penWidth = 30;