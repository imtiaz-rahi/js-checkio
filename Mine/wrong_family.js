#!/home/imtiaz/.local/bin/checkio --domain=js run wrong-family

// Michael always knew that there was something wrong with his family. Many strangers were introduced to him as part of it.
// 
// Michael should figure this out. He's spent almost a month parsing the family archives. He has all father-son connections of his entire family collected in one place.
// 
// With all that data Michael can easily understand who the strangers are. Or maybe the only stranger in this family is Michael? Let's see.
// 
// You have a list of family ties between father and son. Each element on this list has two elements. The first is the father's name, the second is the son's name. All names in the family are unique. Check if the family tree is correct. There are no strangers in the family tree. All connections in the family are natural.
// 
// Input:list of lists. Each element has two strings. The list has at least one element
// 
// Output:bool. Is the family tree correct.
// 
// 
// 
// 
// Precondition:1<= len(tree)<100
// 
// 
// END_DESC

"use strict";

function isFamily(tree) {
    return true;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(isFamily([
      ['Logan', 'Mike']
    ]), true, 'One father, one son');
    assert.equal(isFamily([
      ['Logan', 'Mike'],
      ['Logan', 'Jack']
    ]), true, 'Two sons');
    assert.equal(isFamily([
      ['Logan', 'Mike'],
      ['Logan', 'Jack'],
      ['Mike', 'Alexander']
    ]), true, 'Grandfather');
    assert.equal(isFamily([
      ['Logan', 'Mike'],
      ['Logan', 'Jack'],
      ['Mike', 'Logan']
    ]), false, 'Can you be a father for your father?');
    assert.equal(isFamily([
      ['Logan', 'Mike'],
      ['Logan', 'Jack'],
      ['Mike', 'Jack']
    ]), false, 'Can you be a father for your brather?');
    assert.equal(isFamily([
      ['Logan', 'William'],
      ['Logan', 'Jack'],
      ['Mike', 'Alexander']
    ]), false, 'Looks like Mike is stranger in Logan\'s family');
    console.log("Looks like you know everything. It is time for 'Check'!");
}