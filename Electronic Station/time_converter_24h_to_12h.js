#!/home/imtiaz/.local/bin/checkio --domain=js run time-converter-24h-to-12h

// You prefer a good old 12-hour time format. But the modern world we live in would rather use the 24-hour format and you see it everywhere. Your task is to convert the time from the 24-h format into 12-h format by following the next rules:
// - the output format should be 'hh:mm a.m.' (for hours before midday) or 'hh:mm p.m.' (for hours after midday)
// - if hours is less than 10 - don't write a '0' before it. For example: '9:05 a.m.'
// Here you can find some useful information about the12-hour format.
// 
// 
// 
// Input:Time in a 24-hour format (as a string).
// 
// Output:Time in a 12-hour format (as a string).
// 
// Precondition:
// '00:00'<= time<= '23:59'
// 
// 
// END_DESC

function timeConverter(dayTime) {
    var ar = dayTime.split(':').map(x => parseInt(x));
    var h = (ar[0] == 0 || ar[0] == 12) ? 12 : ar[0]%12;
    return h + ':' + (''+ar[1]).padStart(2, '0') + ' ' + ['a','p'][ar[0]>11 ? 1 : 0] + '.m.';
}