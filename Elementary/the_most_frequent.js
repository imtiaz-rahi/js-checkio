#!/home/imtiaz/.local/bin/checkio --domain=js run the-most-frequent

// You have a sequence of strings, and you’d like to determine the most frequently occurring string in the sequence. It can be only one.
// 
// Input:non empty Array of strings.
// 
// Output:a string.
// 
// 
// END_DESC

"use strict";

function mostFrequent(data) {
    // returns the most frequenly occuring string in the given array

    // your code here
    return '';
}

var assert = require('assert');

if (!global.is_checking) {
    console.log('Example:')
    console.log(mostFrequent([
        'a', 'b', 'c', 
        'a', 'b',
        'a'
    ]))
    
    assert.equal(mostFrequent([
        'a', 'b', 'c', 
        'a', 'b',
        'a'
    ]), 'a')
    assert.equal(mostFrequent(['a', 'a', 'bi', 'bi', 'bi']), 'bi')
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}