#!/home/imtiaz/.local/bin/checkio --domain=js run flatten-list

// 
// END_DESC

"use strict";

function flatList(array){
    return array;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(flatList([1, 2, 3]), [1, 2, 3], "First");
    assert.equal(flatList([1, [2, 2, 2], 4]), [1, 2, 2, 2, 4], "Second");
    assert.equal(flatList([[[2]], [4, [5, 6, [6], 6, 6, 6], 7]]), [2, 4, 5, 6, 6, 6, 6, 6, 7], "Third");
    assert.equal(flatList([-1, [1, [-2], 1], -1]), [-1, 1, -2, 1, -1], "Four");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}