#!/home/imtiaz/.local/bin/checkio --domain=js run binary-count

// 
// END_DESC

"use strict";

function binaryCount(number){
    return 1
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(binaryCount(4), 1);
    assert.equal(binaryCount(15), 4);
    assert.equal(binaryCount(1), 1);
    assert.equal(binaryCount(1022), 9);
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}