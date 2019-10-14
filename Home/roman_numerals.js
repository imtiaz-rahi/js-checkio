#!/home/imtiaz/.local/bin/checkio --domain=js run roman-numerals

// .numeral-table {    margin: auto;    border-collapse: collapse;    text-align: center;  }  .numeral-table * {    border: 1px solid black;    padding: 8px;    width: 50%;  }
// END_DESC

"use strict";

function romanNumerals(number) {
    const ROMAN = {
        'M' : 1000,
        'CM': 900,
        'D' : 500,
        'CD': 400,
        'C' : 100,
        'XC': 90,
        'L' : 50,
        'XL': 40,
        'X' : 10,
        'IX': 9,
        'V' : 5,
        'IV': 4,
        'I' : 1
    };
    const result = [];
    for (let key in ROMAN) {
        let arabic = ROMAN[key];
        result.push(key.repeat(~~(number/arabic)));
        number %= arabic;
    }
    return result.join('');
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(romanNumerals(6), 'VI', "First");
    assert.equal(romanNumerals(76), 'LXXVI', "Second");
    assert.equal(romanNumerals(499), 'CDXCIX', "Third");
    assert.equal(romanNumerals(3888), 'MMMDCCCLXXXVIII', "Forth");
    console.log("Done! Go Check!");
}