// TypeScript has a specific syntax for typing function parameters and return values.
// the `: number` here specifies that this function returns a number
function getTime(): number {
    return new Date().getTime();
}

// return type
function printHello(): void {
    console.log('Hello!');
}

// params types
function multiply(a: number, b: number) {
    return a * b;
}

// the `?` operator here marks parameter `c` as optional
function add(a: number, b: number, c?: number) {
    return a + b + (c || 0);
}

// default params
function pow(value: number, exponent: number = 10) {
    return value ** exponent;
}

// named params
function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
    return dividend / divisor;
}

// rest params
function add(a: number, b: number, ...rest: number[]) {
    return a + b + rest.reduce((p, c) => p + c, 0);
}

// Type Alias

type Negate = (value: number) => number;


// Function types can be specified separately from functions with type aliases.
//
//     These types are written similarly to arrow functions, read more about arrow functions here.
//
// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
const negateFunction: Negate = (value) => value * -1;