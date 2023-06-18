const OPERATIONS = {
    '+': (x, y) => x + y,
    '/': (x, y) => x / y,
    '*': (x, y) => x * y,
    '-': (x, y) => x - y,
    '%': (x, y) => x % y,
};

class SuperMath {
    constructor() {
        this.input();
    }

    input() {
        do {
            this.x = +prompt('Enter first number : ');
        } while (isNaN(this.x));

        do {
            this.znak = prompt('Choose a character (+, -, /, *, %) : ');
        } while (!OPERATIONS[this.znak]);

        do {
            this.y = +prompt('Enter second number : ');
        } while (isNaN(this.y));

        return this;
    }

    check() {
        const confirmFromUser = confirm(`Confirm your operation: ${this.x} ${this.znak} ${this.y}`);

        return confirmFromUser ? OPERATIONS[this.znak](this.x, this.y) : this.input().check();
    }
}

let math = new SuperMath();

alert(math.check());