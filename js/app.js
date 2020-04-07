// function hello() {
//     console.log('Hello, Joe');
// }

// function helloYou(name) {
//     console.log('Hello ' + name);
// }

// username = prompt('What is your name?');

// function helloUserName(username){
//     console.log('Hello, ' + username);
// }
 
// helloUserName(username);

// function joesFavoriteIcecreamery() {
//     return 'Joe\'s favorite icecreamery is Lopez Island';
// }

// function faveIcecreamery(iceCream) {
//     console.log('Joe\'s favorite icecreamery is ' + iceCream);
// }

// joesFavoriteIcecreamery('Lopez Island'); 

// function makeCake(cakeType, filling, frosting) {
//     var message = 'I like ' + cakeType + ' cake with ' + filling + ' filling and ' + frosting + ' frosting.';
//     return message;
// }


function addGreeting() {
var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');
}




function askName() {
    var userName = prompt ('What is your name?');
    document.write('<h3>' + 'Hello, ' + userName + '</h3>');
}




function askPreference() {
    var response = prompt('Are you concerned about life in the time of COVID?');
    var message;

if (response === 'yes') {
    message = 'How has COVID changed daily life? Please, read on.';
} else if (response === 'no') {
    message = 'Maybe you are not concerned, but you probably know someone who is.';
} else if (response === undefined) {
    message = 'Please answer yes or no.';
} else {
    message = 'Whether you are concerned about COVID or not, here are some observations. Please, read on.';
}

    document.write('<h3>' + message + '</h3>');
}

