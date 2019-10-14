#!/home/imtiaz/.local/bin/checkio --domain=js run hamming-distance

// The Hamming distance between two binary integers is the number of bit positions that differs    (read more about the Hamming distance on Wikipedia).    For example:
// 
// 
//     117 = 0 1 1 1 0 1 0 1
//      17 = 0 0 0 1 0 0 0 1
//       H = 0+1+1+0+0+1+0+0 = 3
// 
// You are given two positive numbers (N, M) in decimal form.    You should calculate the Hamming distance between these two numbers in binary form.
// 
// Input:Two arguments as integers.
// 
// Output:The Hamming distance as an integer.
// 
// Precondition:
// 0 < n < 106
// 0 < m < 106
// 
// 
// 
// END_DESC

function hammingDistance(n, m) {
    if (typeof(n) === "object") { m = n[1]; n = n[0]; }
    var binArray = (list) => Array.from((list).toString(2).padStart(24, 0));
    var zip = (a,b) => a.map((x,i) => [x,b[i]]);

    var sum = 0;
    for (let [a, b] of zip(binArray(n), binArray(m))) sum += a ^ b;
    return sum
}

// Best 1
// function hammingDistance([n, m]) {
//    return ((n ^ m).toString(2).replace(/0/g,'').length);
//}

// const hammingDistance = (n, m) => (n ^ m).toString(2).replace(/0/g, "").length;

// Best 2
//function hammingDistance(n, m){
//    return (n ^ m).toString(2).split('').reduce((a, с) => a + +с, 0);
//}

//function hammingDistance(n, m){
//    return (n ^ m).toString(2).split('')
//                  .reduce( (acc,val) => acc + Number(val) , 0 );
//}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(hammingDistance([1, 99999]), 11, "Test 1/1");
    assert.equal(hammingDistance(117, 17), 3, "First example");
    assert.equal(hammingDistance(1, 2), 2, "Second example");
    assert.equal(hammingDistance(16, 15), 5, "Third example");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}