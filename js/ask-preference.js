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


