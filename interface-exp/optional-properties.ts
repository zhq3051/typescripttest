interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig) : { color: string, area: number} {
    let newSquare = { color: 'white', area: 100};

    if(config.color){
        newSquare.color = config.color;
    }

    if(config.width){
        newSquare.area = config.width * config.width;
    }

    return newSquare;
}

let mysquare = createSquare({color: 'black'});
//let mysquare = createSquare({coluor: 'black'});
let mysquare1 = createSquare({color: 'white', opacity: 0.5} as SquareConfig);

let squareOptions = { colour: "red", width: 100 };
let mySquare = createSquare(squareOptions);

console.log(mysquare);