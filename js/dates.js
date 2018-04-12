/*eslint-env browser*/

//STEP 1
//Todays Date
/*window.console.log("Today's Date: ");

var today = function () {
    "use strict";
    var d = new Date();
    return d.toDateString();
};
window.console.log(today());
window.console.log("-----------------");

//Days in month
var getDaysInMonth = function (month, year) {
    "use strict";
    return new Date(year, month, 0).getDate();
};
window.console.log("Days in January " + getDaysInMonth(1, 2018));
window.console.log("Days in February " + getDaysInMonth(2, 2018));
window.console.log("Days in March " + getDaysInMonth(3, 2018));
window.console.log("Days in April " + getDaysInMonth(4, 2018));
window.console.log("Days in May " + getDaysInMonth(5, 2018));
window.console.log("Days in June " + getDaysInMonth(6, 2018));
window.console.log("Days in July " + getDaysInMonth(7, 2018));
window.console.log("Days in August " + getDaysInMonth(8, 2018));
window.console.log("Days in September " + getDaysInMonth(9, 2018));
window.console.log("Days in October " + getDaysInMonth(10, 2018));
window.console.log("Days in November " + getDaysInMonth(11, 2018));
window.console.log("Days in December " + getDaysInMonth(12, 2018));*/



//STEP 2
/*var monthName = function(date){
    "use strict";
    var monthList;
    monthList = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    return monthList[date.getMonth()];
};
window.console.log(monthName(new Date("05/01/2018")));
window.console.log(monthName(new Date("11/01/2018")));*/


//STEP 3
/*var weekend = function (date1) {
    "use strict";
    var date = new Date(date1);
    if (date.getDay() === 6 || date.getDate() === 1) {
        return "weekend";
    } else {
        return date.toDateString();
    }
};
window.console.log(weekend("April 01, 2018"));
window.console.log(weekend("April 07, 2018"));
window.console.log(weekend("April 06, 2018"));
window.console.log(weekend("April 05, 2018"));
window.console.log(weekend("April 21, 2018"));*/


//STEP 4
/*var yesterday = function (date) {
    "use strict";
    date.setDate(date.getDate() - 1);
    return date.toDateString();
};
window.console.log(yesterday(new Date()));*/

//STEP 5

/*function myFunction() {
    "use strict";
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    
    var d;
    var weekdayValue;
    d = new Date();
    weekdayValue = d.getDay();
    window.console.log("Today is " + weekday[weekdayValue].charAt(0));
}
myFunction();*/


