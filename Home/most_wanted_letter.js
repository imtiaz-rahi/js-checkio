#!/home/imtiaz/.local/bin/checkio --domain=js run most-wanted-letter

// You are given a text, which contains different english letters and punctuation symbols.    You should find the most frequent letter in the text. The letter returned must be in lower case.
// While checking for the most wanted letter, casing does not matter, so for the purpose of your search,    "A" == "a".    Make sure you do not count punctuation symbols, digits and whitespaces, only letters.
// 
// If you havetwo or more letters with the same frequency,    then return the letter which comes first in the latin alphabet.    For example -- "one" contains "o", "n", "e" only once for each, thus we choose "e".
// 
// Input:A text for analysis as a string.
// 
// Output:The most frequent letter in lower case as a string.
// 
// Precondition:
// A text contains only ASCII symbols.
// 0 < len(text) ≤ 105
// 
// 
// END_DESC

function counter(data) {
    var res = {};
    for (var it of data) res[it] = res[it] ? res[it] + 1 : 1;
    return res
}

function sortFunction(a, b) {
    if (a[1] === b[1])
        return a[0] < b[0] ? -1 : 1;
    else
        return b[1] - a[1];
}

function mostWanted(data) {
    var obj = counter(data.toLowerCase().replace(/[^a-z]/g, ""));
    var arr = Object.keys(obj).map(key => [key, obj[key]]);
    return arr.sort(sortFunction)[0][0];
}