#!/home/imtiaz/.local/bin/checkio --domain=js run rotate-hole

// Sometimes humans build weird things.    Our Robots have discovered and wish to use an ancient circular cannon loading system.    This system looks like numbered pipes arranged in a circular manner.    There is a rotating mechanism behind these pipes, and the cannons are attached to the end.    This system is incredibly ancient and some of the cannons are broken.    The loading automaton has a program with the pipe numbers which indicate where it should place cannonballs.    These numbers cannot be changed as they are engraved into the pipes.    We can, however, rotate the backend mechanism to change the correspondence between pipes and cannons.    We should find each combination that we can rotate the backend mechanism so that all loaded cannonballs    will be loaded into the still-working cannons. The loading automaton will load all of the balls simultaneously.
// 
// The pipes are numbered from 0 to N-1.    The initial positions of the backend mechanism are represented as an array with 1 and/or 0.    Each element describes a cannon behind the pipe;    the 0th element describe 0th pipe. 1 is a working cannon and 0 is a broken cannon.
// 
// You know the pipe numbers where the automaton will load cannonballs    (sometimes it loads several cannonballs into one cannon).    Your goal is to find all the combinations that you can rotate the backend mechanism    in a clockwise manner so that all of the cannonballs will be loaded into the working cannons.    Rotation is described as an integer - how many units you should rotate clockwise.    The result should be represented as a list of integers (variants) in the ascending order.    The case when you don't need to rotate are described as 0 (but don't forget about other variants).    If it's not possible to find a solution, then return [].
// 
// For example, the initial state is [1,0,0,0,1,1,0,1,0,0,0,1] and pipes numbers are [0,1].    If you rotate the mechanism by 1 or 8 units, then all balls which    are be placed in the 0th and 1st pipes will be in cannons.
// 
// 
// 
// Input:Two arguments.A initial state as a list with 1 and/or 0Pipe numbers for cannonballs as a list of integers
// 
// Output:The rotating variants as a list of integers or an empty list.
// 
// Precondition:
// 3 ≤ len(state) < 100
// all(0 ≤ n < len(state) for n inpipe_numbers)
// 
// 
// 
// END_DESC

"use strict";

function rotate(state, pipeNumbers) {
    // your code here
    return 0;
}

var assert = require('assert');
if (!global.is_checking) {
    // These "asserts" are used for self-checking and not for an auto-testing
    assert.deepEqual(rotate([1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1], [0, 1]), [1, 8])
    assert.deepEqual(rotate([1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1], [0, 1, 2]), [])
    assert.deepEqual(rotate([1, 0, 0, 0, 1, 1, 0, 1], [0, 4, 5]), [0])
    assert.deepEqual(rotate([1, 0, 0, 0, 1, 1, 0, 1], [5, 4, 5]), [0, 5])
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}