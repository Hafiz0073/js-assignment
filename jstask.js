//1.Problem 1: Write a function to calculate the area of a triangle.
function triangle(base1, height, base2) {
    let total = (base1 + height + base2) / 2;
    let area = total * (total - base1) * (total - height) * (total - base2);
    let finalArea = Math.sqrt(area);
    return finalArea
}
triangle(10, 8, 12);
//output 39.68626966596886
//2.Problem 2: Write a function to convert degrees to radians.
function degreeToRadius(degrees) {
    let convert = Math.PI;
    return degrees * (convert / 180);
}

degreeToRadius(30)
//output 0.5235987755982988
//3.Problem 3: Create a function calculate Factorial that takes a number and returns its factorial.
function facCount(number) {
    let count = 1;
    for (let i = 1; i <= number; i++) {
        count = count * i;
    }
    return (`The Factorial number ${number} is ${count}`);
}
facCount(5)
//output: 'The Factorial number 5 is 120'
//4.Problem 4: Create a function isPrime that takes a number as a parameter and returns true if it's a prime number, and false otherwise.

function isPrime(num) {
    if (num === 1) {
        return `${num} is not a prime number`;
    }
    else if (num === 2) {
        return `${num} is a prime number`;
    } else {
        for (i = 2; i < num; i++) {
            if (num % i === 0) {
                return `${num} is not a prime number`;
            }
        }
        return `${num} is  a  prime number`
    }
}
isPrime(7)


//output 7 is  a  prime number
//Problem 5: Create a function mergeArrays that takes two arrays as parameters and returns a new array that merges both arrays.
let array1 = [2, 3, 4, 5, 6, 7];
let array2 = ["a", "b", "c", "d", "e", "f"];
function mergeArrays() {
    let marge = array1.concat(array2);
    return marge;

}
mergeArrays(array1, array2)
//6. Problem 6: Create a function isLeapYear that takes a year as a parameter and returns "This is a leap year" if it's a leap year, and "Not Leap year" otherwise.

function isLeapYear(year) {
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        return `${year} is a leap year`
    }
    else {
        return `${year} is not a leap year`
    }
}
isLeapYear(2001)
//output 2001 is not a leap year


