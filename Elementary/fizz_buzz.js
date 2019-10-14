#!/home/imtiaz/.local/bin/checkio --domain=js run fizz-buzz

// "Fizz buzz" is a word game we will use to teach the robots about division. Let's learn computers.
// 
// You should write a function that will receive a positive integer and return:
// "Fizz Buzz"if the number is divisible by 3 and by 5;
// "Fizz"if the number is divisible by 3;
// "Buzz"if the number is divisible by 5;
// The numberas a string for other cases.
// 
// 
// Input:A number as an integer.
// 
// Output:The answer as a string.
// 
// Precondition:0 < number ≤ 1000
// 
// 
// END_DESC

function fizzBuzz(data) {
    if (data % 15 == 0) return "Fizz Buzz"
    if (data % 3 == 0) return "Fizz"
    if (data % 5 == 0) return "Buzz"
    return data + "";
}