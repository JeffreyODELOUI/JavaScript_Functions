console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count) {
    if (count < 0) {console.log("Your count is negative.")}
    else{
        for (let i = 0; i <= count; i++) {
            if(i % 2 !== 0) {console.log(i);}
        }
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName, age) {
    if (userName === undefined && age === undefined) {console.log("Age and username parameters missing. Nothing to show.")}
    let aboveSixteen = `Congrats ${userName}, you can drive`;
    let belowSixteen = `Sorry ${userName}, but you need to wait till you're 16`;
    if (age >= 16) {console.log(aboveSixteen);}
    else {console.log(belowSixteen);}
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function quadrantChecker (x, y){
    if(x === undefined || y === undefined) {console.log("Your coordinates are undefined.")}
    else if(x === 0 && y === 0) {console.log(`(${x}, ${y}) is the origin.`);}
    else if(x === 0) {console.log(`(${x}, ${y}) is on y axis.`);}
    else if(y === 0) {console.log(`(${x}, ${y}) is on x axis.`);} 
    else if(x > 0 && y > 0) {console.log(`(${x}, ${y}) is in quadrant I.`);}
    else if(x < 0 && y > 0) {console.log(`(${x}, ${y}) is in quadrant II.`);}
    else if(x < 0 && y < 0) {console.log(`(${x}, ${y}) is in quadrant III.`);}
    else {console.log(`(${x}, ${y}) is in quadrant IV.`);}
}

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
function TriangleChecker (x, y, z) {
    if (x === undefined || y === undefined || z === undefined) { return console.log("Provide the sides length bro.")}
        
    let sides = [x, y, z].sort((a, b) => a - b);
    if(sides[2] >= sides[0] + sides[1]) { return console.log("It's not a triangle.");}
    else {
        if(sides[0] === sides[1] && sides[1] === sides[2]){
            return console.log("It's an equilateral triangle.");}
        else if(sides[0] === sides[1] || sides[1] === sides[2]){
            return console.log("It's an isosceles triangle.");}
        else if(sides[2] ** 2 === sides[1] ** 2 + sides[0] ** 2){
            return console.log("It's a right triangle.");}
        else {
            return console.log("It's a scalene triangle.");
        }
    }
}

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
function dataChecker (planLimit, day, usage){
    let aveDaily = usage/day;
    let recommendDaily = planLimit /30;
    let remDay = 30-day;
    if (day > 30){ return console.log(`Your ${planLimit} GB data plan expired ${day - 30} day(s) ago 😔 `); }
    else if(day === 30){return console.log(`Your ${planLimit} GB data plan expired today.`)}
    
    else if (usage >= planLimit){return console.log("You EXCEEDED your plan available data." +
        " You might experience slow internet")}
    
    else if(Math.abs(aveDaily - recommendDaily) < 0.01){
        return console.log(`${day} day(s) used, ${remDay} day(s) remaining\n
Average daily use: ${recommendDaily} GB/day.\n
You're doing pretty good. Your average daily usage is right on point.`)}
    
    else if (aveDaily < recommendDaily){
        return console.log(`${day} day(s) used,${remDay} day(s) remaining\n
Your average daily usage is ${aveDaily} GB/day 🛜.
Which is below the average daily usage recommended: ${recommendDaily} GB/day.\n
Continuing this usage, and you will end up with 
${planLimit - aveDaily * remDay - usage} GB remaining on your plan.\n
We recommend to use ${recommendDaily - aveDaily} GB/day more on average to better benefit from your plan.`)
    }
    
    else {
return console.log(`${day} day(s) used, ${remDay} day(s) remaining\n
Your average daily usage is ${aveDaily} GB/day.🛜
You are EXCEEDING the average daily usage recommended: ${recommendDaily} GB/day.\n
Continuing this high usage, and you'll exceed your data plan by ${aveDaily * remDay + usage - planLimit} GB\n
To stay below your data plan, we recommend to use no more than ${(planLimit - usage) / remDay} GB/day on average.`)}
}

