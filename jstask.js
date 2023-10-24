//1.Problem 1: Write a function to calculate the area of a triangle.
function triangle(base1, height, base2) {
    let total = (base1 + height + base2) / 2;
    let area = total * (total - base1) * (total - height) * (total - base2);
    let finalArea = Math.sqrt(area);
    return finalArea
}
triangle(10, 8, 12);