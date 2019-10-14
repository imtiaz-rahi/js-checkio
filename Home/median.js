#!/home/imtiaz/.local/bin/checkio --domain=js run median

// A median is a numerical value separating the upper half of asortedarray of numbers from the lower half.    In a list where there are an odd number of entities, the median is the number found in the middle of the array.    If the array contains an even number of entities, then there is no single middle value, instead the median becomes    the average of the two numbers found in the middle.    For this mission, you are given a non-empty array of natural numbers (X). With it, you must separate the upper half of    the numbers from the lower half and find the median.
// 
// Input:An array as a list of integers.
// 
// Output:The median as a float or an integer.
// 
// 
// Precondition:
// 1 < len(data) ≤ 1000
// all(0 ≤ x<10 ** 6 for x in data)
// 
// 
// END_DESC

function median(d) {
    d.sort((a, b) => a-b);
    var mid = d.length / 2;
    var even = ar => (ar[mid-1] + ar[mid]) / 2;
    return d.length % 2 == 0 ? even(d) : d[Math.floor(mid)];
}