#!/home/imtiaz/.local/bin/checkio --domain=js run the-nearest-square-number

// You have some number and you are trying to find the nearest square number (a perfect square). Square number is the number the square root of which is an integer. For example, if we start with the number 8, then the two nearby square numbers are 4 (sqrt(4) == 2) and 9 (sqrt(9) == 3). So the answer is 9, because 9 is the nearest.
// 
// 
// 
// 
// 
// Input:A number.
// 
// Output:The nearest square number.
// 
// Precondition:
// 0<number<= 1000000
// 
// 
// 
// END_DESC

"use strict";

function nearestSquare(number) {
    // your code here
    return 0;
}

var assert = require('assert');
if (!global.is_checking) {
    console.log('Example:')
    console.log(nearestSquare(8))

    // These "asserts" are used for self-checking and not for an auto-testing
    assert.equal(nearestSquare(8), 9)
    assert.equal(nearestSquare(13), 16)
    assert.equal(nearestSquare(24), 25)
    assert.equal(nearestSquare(9876), 9801)
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}