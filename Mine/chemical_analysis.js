#!/home/imtiaz/.local/bin/checkio --domain=js run chemical-analysis

// As the input you will get the chemical formula and the number N. Your task is to create a list of the chemical elements, which are in the formula in the amount of >= N.
// Pay attention, that in the some formulas will be used brackets - () and [].This articlewill help you to open the brackets and don't make mistake while counting.
// 
// Input:Chemical formula and the number of atoms.
// 
// Output:List of the chemical elements, sorted in the alphabetical order.
// 
// Precondition:
// 1<= different elements<= 10
// 
// 
// END_DESC

"use strict";

function atoms(formula, limit) {
    // your code here
    return 0;
}

var assert = require('assert');
if (!global.is_checking) {
    console.log("Example:");
    console.log(atoms('C2H5OH', 2));

    // These "asserts" are used for self-checking and not for an auto-testing
    assert.deepEqual(atoms('C2H5OH', 2), ['C', 'H'])
    assert.deepEqual(atoms('H2O', 2), ['H'])
    assert.deepEqual(atoms('Mg(OH)2', 1), ['H', 'Mg', 'O'])
    assert.deepEqual(atoms('K4[ON(SO3)2]2', 4), ['K', 'O', 'S'])
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}