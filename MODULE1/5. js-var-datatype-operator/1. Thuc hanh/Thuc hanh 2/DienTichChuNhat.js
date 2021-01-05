let width, height, area;
function inputSide() {
    let strWidth = prompt("Please enter width of rectangle:");
    let strHeight = prompt("Please enter height of rectangle:");
    /*Converting form string to integer - parseInt()*/
    width = parseInt(strWidth, 10);
    height = parseInt(strHeight, 10);
}
function showArea() {
    area = width * height;
    document.write("The area is: " + area);
}