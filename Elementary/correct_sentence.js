#!/home/imtiaz/.local/bin/checkio --domain=js run correct-sentence

// For the input of your function, you will be given one sentence. You have to return a corrected version, that starts with a capital letter and ends with a period (dot).
// 
// Pay attention to the fact that not all of the fixes are necessary. If a sentence already ends with a period (dot), then adding another one will be a mistake.
// 
// Input:A string.
// 
// Output:A string.
// 
// Precondition:No leading and trailing spaces, text contains only spaces, a-z A-Z , and .
// 
// 
// END_DESC

function correctSentence(text) {
    return text.charAt(0).toUpperCase() + text.slice(1) + (text.charAt(text.length-1) == "." ? "" : ".");
}