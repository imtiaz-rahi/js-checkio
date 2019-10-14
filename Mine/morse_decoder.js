#!/home/imtiaz/.local/bin/checkio --domain=js run morse-decoder

// Your task is to decrypt the secret message using theMorse code.
// The message will consist of words with 3 spaces between them and 1 space between each letter of each word.
// If the decrypted text starts with a letter then you'll have to print this letter in uppercase.
// 
// 
// 
// Input:The secret message.
// 
// Output:The decrypted text.
// 
// Precondition:
// 0<len(message)<100
// The message will consists of numbers and English letters only.
// 
// 
// END_DESC

var MORSE = {'.-':    'a', '-...':  'b', '-.-.':  'c',
             '-..':   'd', '.':     'e', '..-.':  'f',
             '--.':   'g', '....':  'h', '..':    'i',
             '.---':  'j', '-.-':   'k', '.-..':  'l',
             '--':    'm', '-.':    'n', '---':   'o',
             '.--.':  'p', '--.-':  'q', '.-.':   'r',
             '...':   's', '-':     't', '..-':   'u',
             '...-':  'v', '.--':   'w', '-..-':  'x',
             '-.--':  'y', '--..':  'z', '-----': '0',
             '.----': '1', '..---': '2', '...--': '3',
             '....-': '4', '.....': '5', '-....': '6',
             '--...': '7', '---..': '8', '----.': '9'
            };

function morseDecoder(code) {
    // your code here
    return code;
}

var assert = require('assert');
if (!global.is_checking) {
    console.log('Example:')
    console.log(morseDecoder('... --- ...'))

    // These "asserts" are used for self-checking and not for an auto-testing
    assert.equal(morseDecoder("... --- -- .   - . -..- -"), "Some text")
    assert.equal(morseDecoder("..--- ----- .---- ---.."), "2018")
    assert.equal(morseDecoder(".. -   .-- .- ...   .-   --. --- --- -..   -.. .- -.--"), "It was a good day")
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}