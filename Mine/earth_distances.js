#!/home/imtiaz/.local/bin/checkio --domain=js run earth-distances

// To describe a specific position on the surface of the Earth, we must rely on thegeographic coordinate        system.    The geographic coordinate system is a method used to specify every possible location on Earth     by using a set of numbers or letters. A common choice of coordinates islatitudeandlongitude.    With this information we can calculate a distance between two points along the surface.
// 
// For simplicity’s sake, we’ll suppose that the Earth is a perfect sphere with a radius of 6,371    kilometers (it gives an error of no more than 0.3%).    You are given the coordinates of two points and you must find the shortest distance between    these points measured along the surface of the Earth.
// 
// Coordinates are given as a string with the latitude and longitude separated by a comma and/or a whitespace.    The latitude and longitude are represented in the following format:
// 
// 
//     d°m′s″X
// 
// In this example, "d" is degrees, "m" is minutes, "s" is seconds as integers, while "X" is "N"    (North) or "S" (South) for latitude and "W" (West) or "E" (East) for longitude.
// 
// The result should be given as a number in kilometers with a precision of ±0.1 (100 metres).
// 
// Input:Two arguments. Coordinates as strings (unicode).
// 
// Output:The distance as a number (int or float).
// 
// 
// 
// Precondition:Correct Coordinates.
// 
// 
// END_DESC

"use strict";

var R = 6371;

function distance(first, second) {
    // your code here
    return 0;
}

var assert = require('assert');
if (!global.is_checking) {
    // These "asserts" are used for self-checking and not for an auto-testing
    function almostEqual(checked, correct, significantDigits=1) {
        var precision = 0.1 ** significantDigits
        return correct - precision < checked && checked < correct + precision
    }

    var test1 = almostEqual(distance("51°28′48″N 0°0′0″E", "46°12′0″N, 6°9′0″E"), 739.2)
    var test2 = almostEqual(distance("90°0′0″N 0°0′0″E", "90°0′0″S, 0°0′0″W"), 20015.1)
    var test3 = almostEqual(distance("33°51′31″S, 151°12′51″E", "40°46′22″N 73°59′3″W"), 15990.2)

    assert.equal(test1, true)
    assert.equal(test2, true)
    assert.equal(test3, true)

    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}