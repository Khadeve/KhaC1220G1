let fromCurr, toCurr, money, result, unit;
/*Reading data from form.*/
money = document.getElementById("money");
fromCurr = document.getElementById("orCurr");
toCurr = document.getElementById("desCurr");
/*Currenct converter function.*/
function currConverter() {
    money = parseFloat(money.value);
    if ((fromCurr.value === "vnd") && (toCurr.value === "vnd")) {
        unit = "VND";
        return money;
    }
    else if ((fromCurr.value === "usd") && (toCurr.value === "usd")) {
        unit = "USD";
        return money;
    }
    else if ((fromCurr.value === "vnd") && (toCurr.value === "usd")) {
        unit = "USD";
        return (money / 23000);
    }
    else if ((fromCurr.value === "usd") && (toCurr.value === "vnd")) {
        unit = "VND";
        return (money * 23000);
    }
}
/*Printing the result function*/
function printResult() {
    let str = "Result: " + currConverter() + " " + unit;
    document.getElementById("result").innerHTML = str;
}
