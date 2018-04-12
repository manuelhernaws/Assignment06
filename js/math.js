/*eslint-env browser*/

//STEP 1
/*var userNumber = window.prompt("Enter Number");
var x = function (userNumber) {
    "use strict";
    if (isNaN(userNumber)) {
        return "Please Enter Negative or Positive Number";
    }
    return Math.abs(userNumber);
};
window.console.log(x(userNumber));*/

//STEP 2
/*
var userNumber = window.prompt("Enter Decimal Number");
var storedNumber = function (userNumber) {
    "use strict";
    if (isNaN(userNumber)) {
        return "Please Enter Decimal Number To Round Up";
    }
    return Math.ceil(userNumber);
};
window.console.log(storedNumber(userNumber));
*/

//STEP 3
/*var userNumber = window.prompt("Enter Decimal Number");
var storedNumber = function (userNumber) {
    "use strict";
    if (isNaN(userNumber)) {
        return "Please Enter Decimal Number To Round Down";
    }
    return Math.floor(userNumber);
};
window.console.log(storedNumber(userNumber));*/

//STEP 4
/*var userNumber = window.prompt("Please Enter Numbers Separated By Commas For Example 1,2,3,4,5 ");
var userentry = userNumber.split(",");

userentry.max = function () {
    "use strict";
    return Math.max.apply(null, this);
};

// Min function.
userentry.min = function () {
    "use strict";
    return Math.min.apply(null, this);
};

// Show the highest and lowest numbers.
window.console.log("Highest number: " + userentry.max() + "\n Lowest number: " + userentry.min());*/

//STEP 5
/*var userNumber;
var userNumber2;
var x = function (userNumber, userNumber2) {
    "use strict";
    userNumber = parseInt(window.prompt("Enter First Number"), 10);
    userNumber2 = parseInt(window.prompt("Enter Second  Number"), 10);
    if (isNaN(userNumber || userNumber2)) {
        return "Please Enter Numbers To Get Square Root";
    }
    return (Math.sqrt((userNumber * userNumber) + (userNumber2 * userNumber2)));
};
window.console.log(x(userNumber, userNumber2));*/
