#!/home/imtiaz/.local/bin/checkio --domain=js run simple-areas

// Stephan works with simple forms when constructing something,    and he needs some programming tools to calculate his expenses.    Let's take a trip back to our school days and pull out some simple geometry for this.
// 
// You should write a function to calculate the area of simple figures: circles, rectangles and triangles.    You are give an arbitrary number of arguments and depending on this,    the function calculates area for the different figures.
// 
// One argument -- The diameter of a circle and you need to calculate the area of this circle.Two arguments -- The side lengths of a rectangle and you need to calculate the area of this rectangle.Three arguments -- The lengths of each side of a triangle and you need to calculate the area of this triangle.
// 
// The result should be given with two-digit precision as ±0.01.
// 
// Tips:Think about how to work withan arbitrary number of        arguments.
// 
// Input:One, two or three arguments as floats or as integers.
// 
// Output:The area of the circle, rectangle or triangle as a float.
// 
// Precondition:
// 0 < len(args) ≤ 3
// all(0 < x ≤ 1000 for x in args)
// For "triangle" cases the sum of the lengths of any two sides always exceeds the length of the third side.
// 
// 
// END_DESC

function simpleAreas(...a) {
    let len = a.length;
    let circ = dia => Math.pow(dia/2, 2) * Math.PI;
    let rect = (x, y) => x * y;
    let trng = (x, y, z) => { var s = (x+y+z)/2; return Math.sqrt(s*((s-x)*(s-y)*(s-z))); };
    return len == 1 ? circ(a[0]) : ( len == 2 ? rect(a[0], a[1]) : trng(a[0], a[1], a[2]));
}