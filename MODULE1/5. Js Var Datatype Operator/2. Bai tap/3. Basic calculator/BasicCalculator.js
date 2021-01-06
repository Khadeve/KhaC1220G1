let fstOperand = document.getElementById("foper");
let sdOperand = document.getElementById("soper");
let result;
/*Getting operands*/
function getOperand() {
    fstOperand = parseFloat(fstOperand.value);
    sdOperand = parseFloat(sdOperand.value);
}
function sum() {
    getOperand();
    result = fstOperand + sdOperand;
    /*Printing the result.*/
    document.getElementById("result").innerHTML = "Result Summation: " + result;
}
function difference() {
    getOperand();
    result = fstOperand - sdOperand;
    /*Printing the result.*/
    document.getElementById("result").innerHTML = "Result Subtraction: " + result;
}
function multiplication() {
    getOperand();
    result = fstOperand * sdOperand;
    /*Printing the result.*/
    document.getElementById("result").innerHTML = "Result Multiplication: " + result;
}
function division() {
    getOperand();
    result = fstOperand / sdOperand;
    /*Printing the result.*/
    document.getElementById("result").innerHTML = "Result Division: " + result;
}

