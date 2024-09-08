// Random function to generate random numbers
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate an array of random numbers
function generateRandomArray(size, min, max) {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(getRandomNumber(min, max));
    }
    return arr;
}

// Simple sum function
function sumArray(arr) {
    let sum = 0;
    arr.forEach(num => {
        sum += num;
    });
    return sum;
}

// Check if number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Filter prime numbers from array
function filterPrimes(arr) {
    return arr.filter(num => isPrime(num));
}

// Calculate factorial recursively
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

// Create object for students
class Student {
    constructor(name, age, grades) {
        this.name = name;
        this.age = age;
        this.grades = grades;
    }

    // Method to calculate average grade
    getAverageGrade() {
        return sumArray(this.grades) / this.grades.length;
    }

    // Method to determine if the student passed
    didPass() {
        return this.getAverageGrade() > 50;
    }
}

// Generate random students
function generateRandomStudents(count) {
    let students = [];
    let names = ['Anna', 'John', 'Max', 'Olga', 'Sasha'];
    for (let i = 0; i < count; i++) {
        let name = names[getRandomNumber(0, names.length - 1)];
        let age = getRandomNumber(18, 30);
        let grades = generateRandomArray(5, 0, 100);
        students.push(new Student(name, age, grades));
    }
    return students;
}

// Find top student based on average grade
function findTopStudent(students) {
    let topStudent = students[0];
    students.forEach(student => {
        if (student.getAverageGrade() > topStudent.getAverageGrade()) {
            topStudent = student;
        }
    });
    return topStudent;
}

// Simple countdown function
function countdown(seconds) {
    let counter = seconds;
    let interval = setInterval(() => {
        console.log(counter);
        counter--;
        if (counter < 0) {
            clearInterval(interval);
            console.log('Countdown finished!');
        }
    }, 1000);
}

// Generate random tasks and execute
function randomTask() {
    let tasks = ['Math', 'Physics', 'Coding', 'Art', 'History'];
    let task = tasks[getRandomNumber(0, tasks.length - 1)];
    console.log(`Your task is: ${task}`);
}

// Simulate async data fetching
function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => {
            let data = {
                id: getRandomNumber(1, 100),
                name: 'Random Data',
                value: getRandomNumber(1, 1000)
            };
            resolve(data);
        }, 2000);
    });
}

// Run async example
async function runAsyncExample() {
    console.log('Fetching data...');
    let data = await fetchData();
    console.log('Data fetched:', data);
}

// Generate random actions
function randomAction() {
    let actions = ['run', 'jump', 'swim', 'read', 'code'];
    let action = actions[getRandomNumber(0, actions.length - 1)];
    return `I like to ${action}.`;
}

// Greet based on time
function greetBasedOnTime() {
    let hour = new Date().getHours();
    if (hour < 12) {
        console.log('Good morning!');
    } else if (hour < 18) {
        console.log('Good afternoon!');
    } else {
        console.log('Good evening!');
    }
}

// Random game simulator
function gameSimulator() {
    let score = getRandomNumber(0, 100);
    if (score > 50) {
        console.log('You win the game!');
    } else {
        console.log('You lost the game. Try again!');
    }
}

// Recursive function to sum digits of a number
function sumDigits(num) {
    if (num < 10) return num;
    return (num % 10) + sumDigits(Math.floor(num / 10));
}

// Calculate average of random numbers
function averageRandomNumbers(count) {
    let numbers = generateRandomArray(count, 1, 100);
    let sum = sumArray(numbers);
    return sum / count;
}

// Simple class for rectangle
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * (this.width + this.height);
    }
}

// Generate random rectangles
function generateRandomRectangles(count) {
    let rectangles = [];
    for (let i = 0; i < count; i++) {
        let width = getRandomNumber(1, 100);
        let height = getRandomNumber(1, 100);
        rectangles.push(new Rectangle(width, height));
    }
    return rectangles;
}

// Find largest rectangle
function findLargestRectangle(rectangles) {
    let largest = rectangles[0];
    rectangles.forEach(rectangle => {
        if (rectangle.area() > largest.area()) {
            largest = rectangle;
        }
    });
    return largest;
}

// Main function to execute random logic
function main() {
    console.log('Random Action: ', randomAction());
    greetBasedOnTime();

    let students = generateRandomStudents(10);
    console.log('Top Student: ', findTopStudent(students).name);

    let rectangles = generateRandomRectangles(5);
    console.log('Largest Rectangle Area: ', findLargestRectangle(rectangles).area());

    console.log('Countdown from 5:');
    countdown(5);

    runAsyncExample();

    console.log('Sum of digits of 1234:', sumDigits(1234));

    console.log('Average of 5 random numbers:', averageRandomNumbers(5));

    console.log('Game Simulator:');
    gameSimulator();
}

// Execute main function
main();
