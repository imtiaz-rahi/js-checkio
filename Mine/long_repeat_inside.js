#!/home/imtiaz/.local/bin/checkio --domain=js run long-repeat-inside

// There are four substring missionsthat were born all in one day and you shouldn’t be needed more than one day to solve them. All of those mission can be simply solved by brute force, but is it always the best way to go? (you might not have access to all of those missions yet, but they are going to be available with more opened islands on the map).
// 
// It is the fourth and the last mission of the series. But if in the first mission you needed to find repeating letters, then in this one you should find a repeating sequence inside the substring. I have an example for you: in a string "abababc" - "ab" is a sequence that repeats more than once, so the answer will be "ababab"
// 
// Input:String.Output:String.
// 
// 
// END_DESC

"use strict";

function repeatInside(line) {
    // first the longest repeating substring

    // your code here
    return '';
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(repeatInside('aaaaa'), 'aaaaa', "First")
    assert.equal(repeatInside('aabbff'), 'aa', "Second")
    assert.equal(repeatInside('aababcc'), 'abab', "Third")
    assert.equal(repeatInside('abc'), '', "Forth")
    assert.equal(repeatInside('abcabcabab'), 'abcabc', "Fifth")
    console.log('"Run" is good. How is "Check"?');
}