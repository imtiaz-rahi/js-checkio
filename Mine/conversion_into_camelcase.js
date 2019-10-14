#!/home/imtiaz/.local/bin/checkio --domain=js run conversion-into-camelcase

// Your mission is to convert the name of a function (a string) from the Python format (for example "my_function_name") into CamelCase ("MyFunctionName"), where the first char of every word is in uppercase and all words are concatenated without any intervening characters.
// 
// Input:A function name as a string.
// 
// Output:The same string, but in CamelCase.
// 
// Precondition:
// 0<len(string)<= 100
// Input data won't contain any numbers.
// 
// 
// 
// END_DESC

"use strict";

function toCamelCase(name) {
    // your code here
    return name;
}

var assert = require('assert');
if (!global.is_checking) {
    console.log('Example:')
    console.log(toCamelCase('name'))

    // These "asserts" are used for self-checking and not for an auto-testing
    assert.equal(toCamelCase("my_function_name"), "MyFunctionName")
    assert.equal(toCamelCase("i_phone"), "IPhone")
    assert.equal(toCamelCase("this_function_is_empty"), "ThisFunctionIsEmpty")
    assert.equal(toCamelCase("name"), "Name")
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}