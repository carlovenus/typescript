// An enum is a special "class" that represents a group of constants (unchangeable variables).
// Enums come in two flavors string and numeric. Lets start with numeric.

enum CardinalDirections {
    North,
    East,
    South,
    West
}
let currentDirection = CardinalDirections.North;
// logs 0
console.log(currentDirection);
// throws error as 'North' is not a valid enum
currentDirection = 'North'; // Error: "North" is not assignable to type 'CardinalDirections'.


// enums initialised
// You can set the value of the first numeric enum and have it auto increment from that:
enum CardinalDirections {
    North = 1,
    East,
    South,
    West
}
// logs 1
console.log(CardinalDirections.North);
// logs 4
console.log(CardinalDirections.West);


// numeric enums
enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);

//string enums
enum CardinalDirections {
    North = 'North',
    East = "East",
    South = "South",
    West = "West"
};
// logs "North"
console.log(CardinalDirections.North);
// logs "West"
console.log(CardinalDirections.West);

//Technically, you can mix and match string and numeric enum values, but it is recommended not to do so.