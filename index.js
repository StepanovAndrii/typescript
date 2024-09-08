// Random function to generate random numbers
function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate an array of random numbers
function generateRandomArray(size: number, min: number, max: number): number[] {
    let arr: number[] = [];
    for (let i = 0; i < size; i++) {
        arr.push(getRandomNumber(min, max));
    }
    return arr;
}

// Simple sum function
function sumArray(arr: number[]): number {
    let sum: number = 0;
    arr.forEach((num: number) => {
        sum += num;
    });
    return sum;
}

// Check if number is prime
function isPrime(num: number): boolean {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Filter prime numbers from array
function filterPrimes(arr: number[]): number[] {
    return arr.filter((num: number) => isPrime(num));
}

// Calculate factorial recursively
function factorial(n: number): number {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

// Create object for students
class Student {
    name: string;
    age: number;
    grades: number[];

    constructor(name: string, age: number, grades: number[]) {
        this.name = name;
        this.age = age;
        this.grades = grades;
    }

    // Method to calculate average grade
    getAverageGrade(): number {
        return sumArray(this.grades) / this.grades.length;
    }

    // Method to determine if the student passed
    didPass(): boolean {
        return this.getAverageGrade() > 50;
    }
}

// Generate random students
function generateRandomStudents(count: number): Student[] {
    let students: Student[] = [];
    let names: string[] = ['Anna', 'John', 'Max', 'Olga', 'Sasha'];
    for (let i = 0; i < count; i++) {
        let name: string = names[getRandomNumber(0, names.length - 1)];
        let age: number = getRandomNumber(18, 30);
        let grades: number[] = generateRandomArray(5, 0, 100);
        students.push(new Student(name, age, grades));
    }
    return students;
}

// Find top student based on average grade
function findTopStudent(students: Student[]): Student {
    let topStudent: Student = students[0];
    students.forEach((student: Student) => {
        if (student.getAverageGrade() > topStudent.getAverageGrade()) {
            topStudent = student;
        }
    });
    return topStudent;
}

// Simple countdown function
function countdown(seconds: number): void {
    let counter: number = seconds;
    let interval: number = setInterval(() => {
        console.log(counter);
        counter--;
        if (counter < 0) {
            clearInterval(interval);
            console.log('Countdown finished!');
        }
    }, 1000);
}

// Generate random tasks and execute
function randomTask(): void {
    let tasks: string[] = ['Math', 'Physics', 'Coding', 'Art', 'History'];
    let task: string = tasks[getRandomNumber(0, tasks.length - 1)];
    console.log(`Your task is: ${task}`);
}

// Simulate async data fetching
function fetchData(): Promise<{ id: number, name: string, value: number }> {
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
async function runAsyncExample(): Promise<void> {
    console.log('Fetching data...');
    let data = await fetchData();
    console.log('Data fetched:', data);
}

// Generate random actions
function randomAction(): string {
    let actions: string[] = ['run', 'jump', 'swim', 'read', 'code'];
    let action: string = actions[getRandomNumber(0, actions.length - 1)];
    return `I like to ${action}.`;
}

// Greet based on time
function greetBasedOnTime(): void {
    let hour: number = new Date().getHours();
    if (hour < 12) {
        console.log('Good morning!');
    } else if (hour < 18) {
        console.log('Good afternoon!');
    } else {
        console.log('Good evening!');
    }
}

// Random game simulator
function gameSimulator(): void {
    let score: number = getRandomNumber(0, 100);
    if (score > 50) {
        console.log('You win the game!');
    } else {
        console.log('You lost the game. Try again!');
    }
}

// Recursive function to sum digits of a number
function sumDigits(num: number): number {
    if (num < 10) return num;
    return (num % 10) + sumDigits(Math.floor(num / 10));
}

// Calculate average of random numbers
function averageRandomNumbers(count: number): number {
    let numbers: number[] = generateRandomArray(count, 1, 100);
    let sum: number = sumArray(numbers);
    return sum / count;
}

// Simple class for rectangle
class Rectangle {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    area(): number {
        return this.width * this.height;
    }

    perimeter(): number {
        return 2 * (this.width + this.height);
    }
}

// Generate random rectangles
function generateRandomRectangles(count: number): Rectangle[] {
    let rectangles: Rectangle[] = [];
    for (let i = 0; i < count; i++) {
        let width: number = getRandomNumber(1, 100);
        let height: number = getRandomNumber(1, 100);
        rectangles.push(new Rectangle(width, height));
    }
    return rectangles;
}

// Find largest rectangle
function findLargestRectangle(rectangles: Rectangle[]): Rectangle {
    let largest: Rectangle = rectangles[0];
    rectangles.forEach((rectangle: Rectangle) => {
        if (rectangle.area() > largest.area()) {
            largest = rectangle;
        }
    });
    return largest;
}

// Main function to execute random logic
function main(): void {
    console.log('Random Action: ', randomAction());
    greetBasedOnTime();

    let students: Student[] = generateRandomStudents(10);
    console.log('Top Student: ', findTopStudent(students).name);

    let rectangles: Rectangle[] = generateRandomRectangles(5);
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
