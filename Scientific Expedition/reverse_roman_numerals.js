#!/home/imtiaz/.local/bin/checkio --domain=js run reverse-roman-numerals

// Reverse to old CheckiO missionRoman Numerals
// 
// Here you should convert decimal numerals into roman numerals.
// 
// Input:string. Valid roman numeral.
// 
// Output:int. Decimal representation of the give numeral
// 
// Precondition:Non empty string andvalid Roman Numeral
// 
// 
// END_DESC

"use strict";

function reverseRoman(roman) {
    return 0;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(reverseRoman('VI'), 6, "First")
    assert.equal(reverseRoman('LXXVI'), 76, "Second")
    assert.equal(reverseRoman('CDXCIX'), 499, "Third")
    assert.equal(reverseRoman('MMMDCCCLXXXVIII'), 3888, "Forth")
    console.log("Coding complete, Cesar? Click 'Check' to review your tests and earn cool rewards!");
}