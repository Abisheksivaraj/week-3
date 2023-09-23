// 1. Declare an array called fruits containing the names of three different fruits. Then, write a function
// printFruits that takes the fruits array as an argument and prints each fruit to the console.
// const fruits = [&quot;apple&quot;, &quot;banana&quot;, &quot;orange&quot;];
// function printFruits(fruitArray) {
// // Your code here
// }
// // Test Case
// printFruits(fruits); // Should print &quot;apple&quot;, &quot;banana&quot;, &quot;orange&quot;

const fruits = ["apple", "banana", "orange"];

function printFruits(fruitArray) {
  for (const fruit of fruitArray) {
    console.log(fruit);
  }
}
printFruits(fruits);



// 2. Declare three variables: name (a string), age (a number), and isStudent (a boolean). Assign values
// to these variables and then print them to the console.
// // Your code here (declare and assign variables)
// console.log(name);
// console.log(age);
// console.log(isStudent);


const name = "John"; 
const age = 25; 
const isStudent = false; 

console.log(name);
console.log(age);
console.log(isStudent);



// 3. Write a function add that takes two numbers as arguments and returns their sum.
// function add(a, b) {
// // Your code here
// }
// // Test Cases
// console.log(add(5, 3)); // Should return 8
// console.log(add(-2, 7)); // Should return 5
// console.log(add(0, 0)); // Should return 0


function add(a, b) {
  return a + b;
}


console.log(add(5, 3));
console.log(add(-2, 7));
console.log(add(0, 0));



// 4. Write a function reverseString that takes a string as input and returns the string reversed.
// function reverseString(str) {
// // Your code here
// }
// // Test Cases
// console.log(reverseString(&quot;Hello&quot;)); // Should return &quot;olleH&quot;
// console.log(reverseString(&quot;JavaScript&quot;)); // Should return &quot;tpircSavaJ&quot;
// console.log(reverseString(&quot;12345&quot;)); // Should return &quot;54321&quot;

function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log(reverseString("Hello")); 
console.log(reverseString("JavaScript"));
console.log(reverseString("12345"));


// 5. Write a function findMax that takes an array of numbers as input and returns the largest number in
// the array.
// function findMax(numbers) {
// // Your code here
// }
// // Test Cases
// console.log(findMax([5, 2, 9, 1, 5])); // Should return 9
// console.log(findMax([-3, -11, -2, -7])); // Should return -2
// console.log(findMax([42])); // Should return 42

function findMax(numbers) {
  if (numbers.length === 0) {
    return undefined;
  }

  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return max;
}

console.log(findMax([5, 2, 9, 1, 5]));
console.log(findMax([-3, -11, -2, -7]));
console.log(findMax([42])); 



// 6. Create an object called person with properties name, age, and city. Then, write a function
// printPerson that takes the person object as input and prints out a message like &quot;John is 30 years old
// and lives in New York.&quot;
// const person = {
// name: &quot;John&quot;,
// age: 30,
// city: &quot;New York&quot;
// };

// function printPerson(person) {
// // Your code here
// }

// // Test Case
// printPerson(person); // Should print &quot;John is 30 years old and lives in New York.&quot;


const person = {
  name: "John",
  age: 30,
  city: "New York"
};

function printPerson(person) {
  console.log(`${person.name} is ${person.age} years old and lives in ${person.city}.`);
}

printPerson(person); 



// 7. Write a function isEven that takes a number as input and returns true if the number is even and
// false if it&#39;s odd.
// function isEven(number) {
// // Your code here
// }
// // Test Cases
// console.log(isEven(4)); // Should return true
// console.log(isEven(7)); // Should return false
// console.log(isEven(0)); // Should return true


function isEven(number) {
  return number % 2 === 0;
}

console.log(isEven(4));
console.log(isEven(7)); 
console.log(isEven(0));


// 8. Write a function sumArray that takes an array of numbers as input and returns the sum of all the
// numbers in the array.
// function sumArray(numbers) {
// // Your code here
// }
// // Test Cases
// console.log(sumArray([1, 2, 3, 4, 5])); // Should return 15
// console.log(sumArray([-1, 0, 1])); // Should return 0
// console.log(sumArray([])); // Should return 0


function sumArray(numbers) {
  let sum = 0;

  for (const number of numbers) {
    sum += number;
  }

  return sum;
}

console.log(sumArray([1, 2, 3, 4, 5]));
console.log(sumArray([-1, 0, 1]));
console.log(sumArray([]));


// 9. Write a function countVowels that takes a string as input and returns the count of vowels (a, e, i, o,
// u) in the string, regardless of case.
// function countVowels(str) {
// // Your code here
// }
// // Test Cases
// console.log(countVowels(&quot;Hello, World!&quot;)); // Should return 3 (e, o, o)
// console.log(countVowels(&quot;JavaScript is fun&quot;)); // Should return 4 (a, i, a, u)

// console.log(countVowels(&quot;&quot;)); // Should return 0


function countVowels(str) {
  const lowerStr = str.toLowerCase();
  let vowelCount = 0;
  for (const char of lowerStr) {
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {

      vowelCount++;
    }
  }

  return vowelCount;
}

console.log(countVowels("Hello, World!"));
console.log(countVowels("JavaScript is fun")); 
console.log(countVowels(""));


// 10. Write a function mergeObjects that takes two objects as input and returns a new object that is a
// combination of both objects.
// function mergeObjects(obj1, obj2) {
// // Your code here
// }
// // Test Case
// const obj1 = { name: &quot;John&quot;, age: 30 };
// const obj2 = { city: &quot;New York&quot;, job: &quot;Engineer&quot; };
// const merged = mergeObjects(obj1, obj2);
// console.log(merged);
// // Should print { name: &quot;John&quot;, age: 30, city: &quot;New York&quot;, job: &quot;Engineer&quot; }



function mergeObjects(obj1, obj2) {
  const mergedObj = {};

  for (const key in obj1) {
    if (obj1.hasOwnProperty(key)) {
      mergedObj[key] = obj1[key];
    }
  }
  for (const key in obj2) {
    if (obj2.hasOwnProperty(key)) {
      mergedObj[key] = obj2[key];
    }
  }

  return mergedObj;
}

const obj1 = { name: "John", age: 30 };
const obj2 = { city: "New York", job: "Engineer" };
const merged = mergeObjects(obj1, obj2);
console.log(merged);







