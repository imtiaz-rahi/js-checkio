#!/home/imtiaz/.local/bin/checkio --domain=js run long-repeat

// There are four substring missionsthat were born all in one day and you shouldn’t be needed more than one day to solve them. All of those mission can be simply solved by brute force, but is it always the best way to go? (you might not have access to all of those missions yet, but they are going to be available with more opened islands on the map).
// 
// This mission is the first one of the series. Here you should find the length of the longest substring that consists of the same letter. For example, line "aaabbcaaaa" contains four substrings with the same letters "aaa", "bb","c" and "aaaa". The last substring is the longest one which makes it an answer.
// 
// Input:String.Output:Int.
// 
// 
// END_DESC

function longRepeat(line) {
    var line = Array.from(line)
    var last = "", count = 0, max = 0;
    for (var ch of line) {
        if (ch == last) {
            count++;
            if (count > max) max = count;
        } else {
            count = 1;
            last = ch;
        }
    }
    return max > count ? max : count;
}