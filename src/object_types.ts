const car: { type: string, model: string, year: number } = {
 type: "Toyota",
 model: "Corolla",
 year: 2009
};

// inference
const inference = {
 type: "Toyota",
};
inference.type = "Ford"; // no error
inference.type = 2; // Error: Type 'number' is not assignable to type 'string'.

// optional
const car: { type: string, mileage?: number } = { // no error
 type: "Toyota"
};
car.mileage = 2000;


// index signature
const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25; // no error
nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'

// Index signatures like this one can also be expressed with utility types like Record<string, number>