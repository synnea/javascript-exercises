//Write a function that takes two numbers and return the maximum of the two.

function determineMax(a, b) {
    return (a > b) ? a : b
}

determineMax(1, 3);

//FizzBuzz -- divisible by 3: fizz, by 5: buzz, by both: fizzbuzz


function fizzBuzz(input) {
    if (typeof input !== 'number') {
        return console.log("Not a number");
    }
    if ((input % 3 === 0) && (input % 5 === 0)) 
        return console.log("fizzbuzz");
     else if (input % 3 === 0) {
        return console.log("fizz")
    } else if (input % 5 === 5)
        return console.log("buzz")
    else
        return input;
}

fizzBuzz(3);


// Speed Limit Exercise
// 5 -> 1 point
// 12 points -> suspended

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint) {
        console.log("Ok");
        return;
    } 
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12) {
        console.log("License suspended");
    } else 
    console.log(points + " points");
}

checkSpeed(180);


// EvenOrOdd Numbers
// A function that takes a limit and prints whether the number is even or odd for each number from 0 to limit

function showNumbers(limit) {
    for (i = 0; i <= limit; i++) {
        if (i % 2 === 0) console.log(i, "EVEN");
        else console.log(i, "ODD")
    }
}

showNumbers(10);


// countTruthy
// takes an array and returns a count of truthy values

function countTruthy(array) {
    let count = 0;
    for (arr of array) {
        if (arr) count++;
    }
    console.log(count);
}



// display properties of obj that are of type string

const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
}

showProperties(movie);

function showProperties(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'string') 
            console.log(key, obj[key]);
    }
}


// Function Sum with Limit that returns all the sum of all the multiples of 3 and 5 from 0 to limit.

function sum(limit) {
    let count = 0;
    
    for (i = 0; i <= limit; i++) {
        if (i % 3 === 0 || i % 5 === 0)
            count += i;
    }
    console.log(count);
}

sum(10);



// calculate Grades exercise
// calculate averageGrade from array and return grade

const marks = [80, 80, 50];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

function calculateGrade(marks) {
    let averageGrade = marks.reduce(reducer) / marks.length;
    
    if (averageGrade < 60)
        console.log("F");
     else if (averageGrade < 70)
        console.log("D")
     else if (averageGrade < 80)
        console.log("C")
    else if (averageGrade < 90)
        console.log("B")
    else console.log("A")
}

calculateGrade(marks);


// showStars

showStars(2);

function showStars(rows) {

    for (let row=1; row <= rows; row++) {
        let pattern = '';
        for (let i = 0; i < row; i++)
            pattern += '*'
        console.log(pattern);
    }
}



// showPrimes- takes a limit and shows all the primeNumbers up to that limit
// prime number = a number whose factor are only 1 and itself

showPrimes(20);

function showPrimes(limit) {
    for (let number=2; number <= limit; number++) {
        if (isPrime(number)) console.log(number);
    }
}

function isPrime(number) {
    for (let factor=2; factor < number; factor++) 
        if (number % factor === 0) 
            return false;
        return true; 
}

