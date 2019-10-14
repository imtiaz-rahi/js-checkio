#!/home/imtiaz/.local/bin/checkio --domain=js run node-disconnected-users

// 
// END_DESC

"use strict";

function disconnectedUsers(net, users, source, crushes) {
    return 0;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(disconnectedUsers([
        ['A', 'B'],
        ['B', 'C'],
        ['C', 'D']
    ], {
        'A': 10,
        'B': 20,
        'C': 30,
        'D': 40
    },
        'A', ['C']), 70, "First")
    assert.equal(disconnectedUsers([
        ['A', 'B'],
        ['B', 'D'],
        ['A', 'C'],
        ['C', 'D']
    ], {
        'A': 10,
        'B': 0,
        'C': 0,
        'D': 40
    },
        'A', ['B']), 0, "Second")
    assert.equal(disconnectedUsers([
        ['A', 'B'],
        ['A', 'C'],
        ['A', 'D'],
        ['A', 'E'],
        ['A', 'F']
    ], {
        'A': 10,
        'B': 10,
        'C': 10,
        'D': 10,
        'E': 10,
        'F': 10
    },
        'C', ['A']), 50, "Thirt")
    console.log("Coding complete? Click 'Check' NOW!");
}