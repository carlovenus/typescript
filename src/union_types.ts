// Union types are used when a value can be more than a single type.

function printStatusCode(code: string | number) {
    console.log(`My status code is ${code}.`)
}
printStatusCode(404);
printStatusCode('404');

function printStatusCode2(code: string | number) {
    console.log(`My status code is ${code.toUpperCase()}.`) // error: Property 'toUpperCase' does not exist ontype 'string | number'.
}

printStatusCode2(404);
printStatusCode2('404');