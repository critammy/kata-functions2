// kata 01
// Write a function named "add" which takes two arguments (as input variables) and returns their sum.
function add(x, y) {
    return x + y
}
console.log(add(2, 4))


// kata 02
// Write a function named "multiply" which takes two arguments (as input variables) and returns their product.
// // You may not use built-in math operators or functions (such as the * multiplication operator). Instead, you will use a FOR loop which calls your add function from the first kata
// For example, calling multiply(6, 4) should return a result of 24, which could be expressed by adding 6 to itself 4 times:

// 6 + 6 + 6 + 6 = 24

function multiply(x, y) {
    let answer = 0
    for (let index = 0; index <= y - 1; index++) {
        answer = add(answer, x)
      
    }

    return answer
}
console.log(multiply(6, 4))
// kata 03
// Write a function named "power" which takes two arguments ( x and n) and returns the the result of raising x to the nth power.
// You may not use built-in math operators or functions (such as the * multiplication operator), or the ** operator for power/exponentiation). Instead, you will re-use functions you wrote in earlier katas to write this function
// For example, if we called power(2, 8), we should return 256 by multiplying 2 by itself 8 times:

// 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 = 256
// And to achieve the correct result for power(3, 4), we would want to multiply 3 by itself 4 times:

// 3 * 3 * 3 * 3 = 81
function power(x, n) {

 }


// kata 04
// Write a function named "factorial" which takes a single argument and returns the factorial of that value.
// You may not use built-in math operators or functions (such as the * multiplication operator). Instead, you will re-use functions you wrote in earlier katas to write this function.
// A factorial multiplies a given number by every number below it. For example, "5 factorial" (usually symbolized by 5! in Mathematics) would be:

// 5 * 4 * 3 * 2 * 1 = 120
// For example, calling factorial(4) should return a result of 24.

function factorial(x) {
    let result = 1;
    for (let number = x; number > 0; number -= 1) {
       result = multiply(number, result)
         
        }
    return result
}
console.log(factorial(5))



// bonus kata 
// Write a function named "Fibonacci" which takes an argument n and returns the nth Fibonacci number.
// You may not use built-in math operators or functions (such as the * multiplication operator). Instead, you will use functions you wrote in earlier katas to write this function.
// For example, calling fibonacci(8) should return a result of 13. The fibonnaci sequence begins:

// 0  1  1  2  3  5  8  [13]  21
// So, the number in brackets is the 8th Fibonacci number.



// Hints 
// The answers to most of these katas will look similar. They will typically involve:
// declaring a variable to keep track of a final result
// writing a FOR loop to consistently modify the result
// returning the result
// If you struggle for more than 15 minutes on any one thing, ask for help! This is an exercise in critical thinking, not torture.