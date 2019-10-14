#!/home/imtiaz/.local/bin/checkio --domain=js run non-unique-elements

// If you have 50 different plug types, appliances wouldn't be available and would be very        expensive. But once an electric outlet becomes standardized, many companies can design        appliances, and competition ensues, creating variety and better prices for consumers.
// -- Bill Gates
// 
// You are given a non-empty list of integers (X).    For this task, you should return a list consisting of only the non-unique elements in this list.    To do so you will need to remove all unique elements (elements which are contained in a given    list only once).    When solving this task, do not change the order of the list.    Example: [1, 2, 3, 1, 3] 1 and 3 non-unique elements and result will be [1, 3, 1, 3].
// 
// 
// 
// Input:A list of integers.
// 
// Output:An iterable of integers.
// 
// 
// How it is used:This mission will help you to understand how to manipulate arrays,    something that is the basis for solving more complex tasks.    The concept can be easily generalized for real world tasks.    For example: if you need to clarify statistics by removing low frequency elements (noise).
// 
// You can find out more about JavaScript arrays inone of our articles featuring lists, tuples, array.array and numpy.array.
// 
// Precondition:
// 0 < len(data) < 1000
// 
// 
// 
// END_DESC

function counter(data) {
    var res = {}
    for (var it of data) {
        res[it] = res[it] || 0
        res[it] += 1
    }
    return res    
}

function nonUniqueElements(data) {
    var res = counter(data);
    for (var key in res) {
        if (res[key] > 1) continue;
        data.splice(data.indexOf(parseInt(key)), 1);
    }
    return data;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.deepEqual(nonUniqueElements([1, 2, 3, 1, 3]), [1, 3, 1, 3], "1st example");
    assert.deepEqual(nonUniqueElements([1, 2, 3, 4, 5]), [], "2nd example");
    assert.deepEqual(nonUniqueElements([5, 5, 5, 5, 5]), [5, 5, 5, 5, 5], "3rd example");
    assert.deepEqual(nonUniqueElements([10, 9, 10, 10, 9, 8]), [10, 9, 10, 10, 9], "4th example");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}