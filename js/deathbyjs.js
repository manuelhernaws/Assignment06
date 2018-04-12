/*eslint-env browser*/

//STEP 1
/*var alphabet = function () {
    "use strict";
    var userWord = window.prompt("Enter Word to arrange in alphabet order");
    if (userWord.match(/\d/g)) {
        return "Please enter a word not a number";
    }
    return userWord.split("").sort().join(""); 
};
window.alert(alphabet());*/


//STEP 2

/*var userEntry;

function upperCase(userEntry) {
    "use strict";
    userEntry = window.prompt("Please enter words");
    //To not pass digets
    if (userEntry.match(/\d/g)) {
        return "Please do not enter numbers";
    }
    //To make lowercase and upper case using regex
    userEntry = userEntry.toLowerCase().replace(/\b[a-z]/g, function (letter) {
        return letter.toUpperCase();
    });
    return userEntry;
}
window.alert(upperCase(userEntry));*/


//STEP 3
/*var userEntry;

function myfunction(userEntry) {
    "use strict";
    userEntry = window.prompt("Enter words to get number of vowels");
    if (userEntry.match(/\d/g)) {
        return "Please do not enter numbers";
    }
    return userEntry.match(/[aeiou]/g).length;
}
window.alert(myfunction(userEntry));*/


//STEP 4
/*function randomFunction(list) {
    "use strict";
    var text = "";
    var i;
    var randomList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (i = 0; i < list; i += 1) {
        text += randomList.charAt(Math.floor(Math.random() * randomList.length));
    }
    return text;
}
window.console.log(randomFunction(8));*/
//STEP 5
/*function LongestName(countryName) {
    "use strict";
    return countryName.reduce(function (lname, country) {
        return lname.length > country.length ? lname : country;
    });
}
window.alert(LongestName(["Australia", "Germany", "United States of America"]));*/
