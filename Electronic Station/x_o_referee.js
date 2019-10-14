#!/home/imtiaz/.local/bin/checkio --domain=js run x-o-referee

// Tic-Tac-Toe, sometimes also known as Xs and Os, is a game for two players    (X and O) who take turns marking the spaces in a 3Ă3 grid.    The player who succeeds in placing three respective marks in a horizontal, vertical, or diagonal rows (NW-SE and    NE-SW) wins the game.
// 
// But we will not be playing this game. You will be the referee for this games results. You are given a result of a    game and you must determine if the game ends in a win or a draw as well as who will be the winner. Make sure to    return "X"    if the X-player wins and "O" if the O-player wins. If the game is a draw, return "D".
// 
// 
// 
// A game's result is presented as a list of strings, where "X" and "O" are players' marks and "." is the empty cell.
// 
// Input:A game result as a list of strings (unicode).
// 
// Output:"X", "O" or "D" as a string.
// 
// 
// END_DESC

function xoReferee(d) {
    var rows = d;
    var cols = [d[0][0]+d[1][0]+d[2][0], d[0][1]+d[1][1]+d[2][1], d[0][2]+d[1][2]+d[2][2]];
    var diag = [d[0][0]+d[1][1]+d[2][2], d[0][2]+d[1][1]+d[2][0]];
    var lines = rows.concat(cols, diag);
    return lines.includes('XXX') ? "X" : (lines.includes('OOO') ? "O" : "D");
}