#!/home/imtiaz/.local/bin/checkio --domain=js run cipher-map

// 
// END_DESC

"use strict";

function recallPassword(grille, password){
    return ""
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(recallPassword(['X...',
         '..X.',
         'X..X',
         '....'],
        ['itdf',
         'gdce',
         'aton',
         'qrdi']), 'icantforgetiddqd', "First Example");
    assert.equal(recallPassword(['....',
         'X..X',
         '.X..',
         '...X'],
        ['xhwc',
         'rsqx',
         'xqzz',
         'fyzr']), 'rxqrwsfzxqxzhczy', "Second Example");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}