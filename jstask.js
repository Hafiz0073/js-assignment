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
//7. Problem 7: Create a function removeDuplicates that takes an array and returns a new array with duplicates removed.

let arr = [1, 2, 3, 4, 5, 1, 2, 'a', 's', 'f', 'a'];
function removeDuplicates(arr) {
    return arr.filter((value, index) => arr.indexOf(value) === index)
}
removeDuplicates(arr)

//output (8) [1, 2, 3, 4, 5, 'a', 's', 'f']

//8.Problem 8: Create a function convertToCelsius that takes a temperature in Fahrenheit and returns the equivalent temperature in Celsius.
function convertToCelsius(far) {
    let celsius = (far - 32) / 1.8
    return `here ${far} Fahrenheit  to celsius is equal to ${celsius}`;
}
convertToCelsius(50)
//output 8
//9.Problem 9: Write a function to find the maximum of five numbers.

function maxNum() {
    let totalNum = [23, 76, 34, 200, 100];
    let maxVal = Math.max(...totalNum);
    return `Maximum Value is ${maxVal}`;
}
maxNum()
//output Maximum Value is 200
//10.Problem 10: Create a function called evenOdd() that takes a string as a parameter. Now you have to give the output based on the total number of characters in your String. The output will be 'even' or 'odd'. [ Input: ‘JavaScript’ Output: even, Input: ‘Hello’ Output: odd]
let check = "javascript";
function evenOdd(check) {
    let length = check.length;
    if (length % 2 == 0) {
        return "even";
    }
    else {
        return "odd";
    }
}
evenOdd(check)

