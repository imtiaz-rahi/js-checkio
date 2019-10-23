#!/home/imtiaz/.local/bin/checkio --domain=js run create-intervals

// From a Array of Integers you have to create a list of closed intervals as Arrays, so the  intervals are covering all the values found in the set.
// 
// A closed interval includes its endpoints! The interval1..5, for example,  includes each valuexthat satifies the condition1<= x<= 5.
// 
// Values can only be in the same interval if the difference between a value and the next  smaller value in the set equals one, otherwise a new interval begins. Of course, the  start value of an interval is excluded from this rule.
// A single value, that does not fit into an existing interval becomes the start- and  endpoint of a new interval.
// 
// Input:Array of Integers.
// 
// Output:Array of Array of two Integers, indicating the endpoints of the interval. The Array should be sorted by start point of each interval
// 
// 
// END_DESC

function createIntervals(data) {
    data = data.sort((a,b) => a-b);
    let x = data[0], rs = [];
    data.forEach((v, i, ar) => {
        if (ar[i+1] === undefined || ar[i+1] - v > 1) {
            rs.push([x, v]);
            x = ar[i+1];
        }
    });
    return rs;
}