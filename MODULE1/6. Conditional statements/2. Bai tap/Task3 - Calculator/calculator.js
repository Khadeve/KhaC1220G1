let strResult = "";

function getValue(value) {
    switch(value) {
        case '0': case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9':
        case '+': case '-': case '*': case '/':
            strResult += value;
            document.getElementById("result").innerHTML = strResult;
            break;
        case '=':
            strResult = eval(strResult);
            document.getElementById("result").innerHTML = strResult;
            break;
        case 'reset':
            strResult = '';
            document.getElementById("result").innerHTML = '0';
    }
}

//Continuously printing the expression.
// document.getElementById("result").innerHTML = strResult;

// function test() {
//     alert(strResult);
//     strResult = "";
// }
