#!/home/imtiaz/.local/bin/checkio --domain=js run count-inversions

// In computer science and discrete mathematics,    aninversionis a pair of places in a sequence where the elements in these places are out of their natural order. So, if we use    ascending order for a group of numbers, then an inversion is when larger numbers appear before lower number in a    sequence.
// 
// Check out this example sequence: (1, 2, 5, 3, 4, 7, 6) and we can see here three inversions
// - 5 and 3;    - 5 and 4;    - 7 and 6.
// 
// You are given a sequence of unique numbers and you should count the number of inversions in this sequence.
// 
// Input:A sequence as a tuple of integers.
// 
// Output:The inversion number as an integer.
// 
// Precondition:2 < len(sequence) < 200
// len(sequence) == len(set(sequence))
// all(-100 < x < 100 for x in sequence)
// 
// 
// END_DESC

var _ = require('underscore');

// Find the index of item which is greater than next one and swap those values in the array.
// [1, 5, 2, 4] becomes [1, 2, 5, 4] in one iteration.
function swap(s) {
    for (var i = 0; i < s.length; i++)
        if (s[i] > s[i+1]) break;
    return s.slice(0, i).concat(s[i+1], s[i], s.slice(i+2));
}

function countInversion(s) {
    var sorted = [...s].sort((a,b) => a-b);
    var counter = 0;
    while (true) {
        if (_.isEqual(sorted, s)) return counter;
        s = swap(s);
        counter++;
    }
    return 199;
}