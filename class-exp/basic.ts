class greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }

    greet() {
        return `hello, ${this.greeting}`;
    }
}

let person = new greeter('zeke');
console.log(person.greet());