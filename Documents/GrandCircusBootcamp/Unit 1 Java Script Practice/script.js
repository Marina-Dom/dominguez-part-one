document.write("JavaScript works!");
console.log("Hello console");
console.warn("This is only a test!")

let myName = "Marina";
let workFromHome = false;
let side = 10;
let radius = 11;

console.log("My name is " + myName + ".");
console.log("I work from home: " + workFromHome);
console.log(`The length of each side of the square is ${side}`);
console.log("The radius of the circle is " + radius);

let squareArea = side * side;
let squarePerimeter = 4 * side;
let circleArea = Math.PI * radius * radius;
let circlePerimeter = 2 * Math.PI * radius;

console.log("The square area is " + squareArea + "and the perimeter is " + squarePerimeter);
console.log("The circle area is " + circleArea + "and the circle perimeter is " + circlePerimeter);

let travelOptions = ["foot", "bike", "car", "airplane" ];

console.log(`1) ${travelOptions[0]}`);
console.log("The travel options are: ");
console.log("1. foot ");
console.log("2. bike ");
console.log("3. car ");
console.log("4. airplane ");

/* 
Another option from unit 1.
let travelOptions = [ "foot", "bike", "car", "airplane" ];
console.log("The travel options are:");
console.log(`1) ${travelOptions[0]}`);
console.log(`2) ${travelOptions[1]}`);
console.log(`3) ${travelOptions[2]}`);
console.log(`4) ${travelOptions[3]}`);*/

var travelType = prompt ("How would you like to travel?");

/*
Another option.
let travelType = prompt("How would you like to travel?");
console.log(`Travel Type: ${travelType}`);*/

let distance = 100;
let time = 0;
let cost = 0;


if (travelType === "foot") {
    console.log("Walking is free! Speed is 3mph.");
    cost = 0;
    time = distance / 3 ;
} else if (travelType === "bike") {
    let rentBike = prompt("Do you need to rent the bike? (yes or no)");
    if (rentBike === "yes") {
        console.log("Bike rental is $45! Speed is 10mph.");
        costBar = 45;
    } else {
        console.log("Biking is free! Speed is 10mph.");
        cost = 0;
    }
    time = distance / 10;
} else if (travelType === "car") {
    console.log("Driving is $0.25/mi. Speed is 60mph.");
    cost = 0.25 * distance;
    time = distance / 60;
} else if (travelType === "airplane") {
    let passengerCount = prompt("How many passengers?");
    cost = 0.1 * distance * passengerCount;
    console.log("Flying is $0.10/mi. Speed is 400mph.");
    time = distance / 400;
} else {
    console.log(`Sorry. ${travelType} is an invalid option. `)
}

console.log(`Traveling ${distance} miles by ${travelType} took ${time} hours and cost $${cost}!`);


let costBar = "Cost: ";
for (let c = 1; c < 6; c ++) {
  costBar += "$";
}
console.log(costBar);

// "Cost: $$$$$"
