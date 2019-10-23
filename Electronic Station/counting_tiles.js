#!/home/imtiaz/.local/bin/checkio --domain=js run counting-tiles

// Stephan needs some help building a circular landing zone using the ice square tiles for their new Ice Base.    Before he converts the area to a construction place, Stephan needs to figure out how many square tiles he will need.
// 
// Each square tile has size of 1x1 meters.     You need to calculate how many whole and partial tiles are needed for a circle with a radius of N meters.     The center of the circle will be at the intersection of four tiles. For example: a circle with a radius of 2 metres    requires 4 whole tiles and 12 partial tiles.
// 
// Input:The radius of a circle as a float
// 
// Output:The quantities whole and partial tiles as a list with two integers -- [solid, partial].
// 
// Precondition:
// 0 < radius ≤ 4
// 
// 
// 
// END_DESC

"use strict";

function countingTiles(radius) { 
    var d = (x, y) => Math.sqrt(x*x + y*y), a = Math.ceil(radius), i=0, x, y, f=0, p=0; 
    while(i < a*a) 
        d((x = i%a)+1, (y = ~~(i++/a))+1) <= radius ? f++: d(x, y) <= radius && p++;
    return [4*f, 4*p];
}

var assert = require('assert');

if (!global.is_checking) {
    assert.deepEqual(countingTiles(2), [4, 12], "N=2");
    assert.deepEqual(countingTiles(3), [16, 20], "N=3");
    assert.deepEqual(countingTiles(2.1), [4, 20], "N=2.1");
    assert.deepEqual(countingTiles(2.5), [12, 20], "N=2.5");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}