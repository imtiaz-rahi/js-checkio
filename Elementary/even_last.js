#!/home/imtiaz/.local/bin/checkio --domain=js run even-last

// You are given an array of integers. You should find the sum of the integers with even indexes (0th, 2nd, 4th...). Then multiply this summed number and the final element of the array together.      Don't forget that the first element has an index of 0.
// 
// For an empty array, the result will always be 0 (zero).
// 
// Input:A list of integers.
// 
// Output:The number as an integer.
// 
// Precondition:0 ≤ len(array) ≤ 20
// all(isinstance(x, int) for x in array)
// all(-100 < x < 100 for x in array)
// 
// 
// 
// END_DESC

function evenLast(data) {
    if (data.length == 0) return 0;
    var sum = 0;
    for (var i = 0; i < data.length; i = i+2) sum += data[i]
    return sum * data[data.length - 1];
}