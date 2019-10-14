#!/home/imtiaz/.local/bin/checkio --domain=js run node-subnetworks

// Sometimes damaged nodes are unrecoverable. In that case, people that were connected to the crushed node must migrate to another district while administration attempts to fix the node.
// 
// But if a crushed node disconnects multiple districts from one another, then the network splits into two sub-networks and every sub-network should have their own Mayor. And Mayors must use pigeons for mailing between each other. In that case, when the network is split you don’t need hundreds of pigeons.
// 
// Your mission is to figure out how many Mayors you need to control the entire city when some nodes are crushed. In other words, you need to figure out how many sub-networks will be formed after some nodes are crush and not recovered.
// 
// 
// 
// 
// END_DESC

"use strict";

function subnetworks(net, crushes) {
    return 0;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(subnetworks([
            ['A', 'B'],
            ['B', 'C'],
            ['C', 'D']
        ], ['B']), 2, "First")
    assert.equal(subnetworks([
            ['A', 'B'],
            ['A', 'C'],
            ['A', 'D'],
            ['D', 'F']
        ], ['A']), 3, "Second")
    assert.equal(subnetworks([
            ['A', 'B'],
            ['B', 'C'],
            ['C', 'D']
        ], ['C', 'D']), 1, "Third")
    console.log("Done! Check button is waiting for you!");
}