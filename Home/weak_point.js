#!/home/imtiaz/.local/bin/checkio --domain=js run weak-point

// While traveling, the spaceship endures quite a lot of stress. As a result, an important part of the maintenance is    to check the outer hull. Stephan uses a digital durabilitimeter for this task. The device scans a portion of the    spaceships hull and gives a durability map that is divided by small square fragments with measurements. Sometimes    Stephan does not have much time and he can patch only couple points, so we need an algorithm to find the weak    points.
// 
// The durability map is represented as a matrix with digits. Each number is the durability measurement for the cell.    To find the weakest point we should find the weakest row and column. The weakest point is placed in the intersection    of these rows and columns. Row (column) durability is a sum of cell durability in that row (column). You should    find coordinates of the weakest point (row and column). The first row (column) is 0th row (column). If a section has    several equal weak points, then choose the top left point.
// 
// 
// END_DESC

function weakPoint(matrix) {
    var rows = [], cols = new Array(matrix.length).fill(0);
    for (var i = 0; i < matrix.length; i++) {
        rows[i] = matrix[i].reduce((a, b) => a+b);
        for (var j = 0; j < matrix[i].length; j++)
            cols[j] += matrix[i][j];
    }
    return [rows.indexOf(Math.min(...rows)), cols.indexOf(Math.min(...cols))]
}