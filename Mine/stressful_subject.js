#!/home/imtiaz/.local/bin/checkio --domain=js run stressful-subject

// 
// END_DESC

"use strict";

function isStressful(subj) {
    return false;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(isStressful("Hi"), false, "First")
    assert.equal(isStressful("I neeed HELP"), true, "Second")
    console.log("Done! Go Check it!");
}