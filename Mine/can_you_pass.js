#!/home/imtiaz/.local/bin/checkio --domain=js run can-you-pass

// If you have solved the"How to find friends"mission, then you already know how to check for the existence of a path    in graphs. Let's try to add something more to that problem.
// 
// You are given a matrix (2D array) and the coordinates (row and column) of two cells with the same value. The matrix    consists of digits. You may move to neighbouring cells either horizontally or vertically provided the values of the    origin and destination cells are equal. You should determine if a path exists between two given cells.
// 
// A matrix is represented as a tuple of tuples with digits. Coordinates are represented as a tuple with two numbers:    the row and column. The result should be any value which can be converted into a boolean. If a path exists, then return    True. Return False if there is none.
// 
// 
// END_DESC

"use strict";

function canPass(matrix, first, second) {
    // your code here
    return 0;
}

var assert = require('assert');
if (!global.is_checking) {
    // These "asserts" are used for self-checking and not for an auto-testing

    assert.equal(canPass([[0, 0, 0, 0, 0, 0],
                          [0, 2, 2, 2, 3, 2],
                          [0, 2, 0, 0, 0, 2],
                          [0, 2, 0, 2, 0, 2],
                          [0, 2, 2, 2, 0, 2],
                          [0, 0, 0, 0, 0, 2],
                          [2, 2, 2, 2, 2, 2]],
                          [3, 2], [0, 5]), true)
    assert.equal(canPass([[0, 0, 0, 0, 0, 0],
                          [0, 2, 2, 2, 3, 2],
                          [0, 2, 0, 0, 0, 2],
                          [0, 2, 0, 2, 0, 2],
                          [0, 2, 2, 2, 0, 2],
                          [0, 0, 0, 0, 0, 2],
                          [2, 2, 2, 2, 2, 2]],
                          [3, 3], [6, 0]), false)
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}