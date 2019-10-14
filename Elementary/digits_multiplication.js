#!/home/imtiaz/.local/bin/checkio --domain=js run digits-multiplication

// You are given a positive integer.    Your function should calculate the product of the digits excluding any zeroes.
// 
// For example: The number given is 123405. The result will be 1*2*3*4*5=120 (don't forget to exclude zeroes).
// 
// Input:A positive integer.
// 
// Output:The product of the digits as an integer.
// 
// Precondition:0 < number < 106
// 
// 
// END_DESC

function digitsMultip(data) {
    return Array.from("" + data).filter(x => x != 0).reduce((a, b) => a * b, 1);
}