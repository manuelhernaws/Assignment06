/*eslint-env browser*/

//STEP 1
/*var nameLength = function () {
    "use strict";
    var userName = window.prompt("Enter your name");
    if (Number(userName)) {
        return "No numbers pls";
    }
    return userName.length;
};
window.alert(nameLength());*/

//STEP 2
/*var letterNumber = function () {
    var userName = window.prompt("enter your name");
    var userNumber = window.prompt("enter number");
    if (userName.length < userNumber){
        return "please enter smaller number";
    } else if (Number(userName)) {
        return "No Numbers As Name Please";
    } else if (isNaN(userNumber)) {
        return "Enter Number Only";
    } else {
        return "letter is " + userName.charAt(userNumber);
    }
};
window.alert(letterNumber());*/


//STEP 3
/*
var concatName = function () {
    "use strict";
    var userName = window.prompt("Enter Your Name");
    var userLastName = window.prompt("Enter Your Last name");
    if (Number(userName) || Number(userLastName)) {
        return "Please Don't Enter Numbers";
    }
    return "Your Name Is " + userName.concat(userLastName);
};
window.alert(concatName());
*/

//STEP 4
/*
var application = function () {
    var app = "The quick brown fox jumps over the lazy dog";
    window.alert(app.indexOf("fox"));
};
application();
*/

//STEP 5 
/*var app = function () {
    "use strict";
    var application = "The quick brown fox jumps over the lazy fox";
    window.alert(application.lastIndexOf("fox"));
};
app();*/

//STEP 6
/*var app = function () {
    "use strict";
    var application = "The quick brown fox jumped over the lazy dog";
    var user = window.prompt("Enter Full Name");
    if (Number(user)) {
        return "No Numbers";
    } 
    return application.replace("the lazy dog", user);
};
window.alert(app());*/

//STEP 7
/*var application = "The quick brown fox jumps over the lazy dog";
var user = window.prompt("Enter a Letter");
window.alert(application.search(user));*/



//STEP 8
/*var newString = function () {
    "use strict";
    var oldString = "The quick brown fox jumps over the lazy dog";
    newString = oldString.slice(30, 43);
    return newString;
};
window.alert(newString());*/

//STEP 9
/*var application = function () {
    "use strict";
    var x = "     THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG     ";
    return x.trim().toLowerCase(); 
};
window.alert(application());*/

//STEP 10
/*var x = function () {
    "use strict";
    var application = "the quick brown fox jumps over the lazy dog";
    return application.charAt(0).toUpperCase() + application.slice(1); 
};
window.alert(x());*/