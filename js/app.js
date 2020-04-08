
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
    return document.write('<h3>' + greeting + '</h3>');
}




function askName() {
    var userName = prompt('What is your name?');
    return document.write('<h3>' + 'Hello, ' + userName + '</h3>');
}




function askPreference() {
    var response = prompt('Are you concerned about life in the time of COVID?');
    var message;

    if (response === 'yes') {
        message = 'COVID is concerning, isn\'t it?';
    } else if (response === 'no') {
        message = 'Maybe you are not concerned, but you probably know someone who is.';
    } else if (response === undefined) {
        message = 'Please answer yes or no.';
    } else {
        message = 'Whether you are concerned about COVID or not, here are some observations. Please, read on.';
    }
    return document.write('<h3>' + message + '</h3>');
    
}


function getItemType() {
    var response = prompt('Would you like to buy a gloves or a mask?');
    var item;
  
    while (response !== 'gloves' && response !== 'mask') {
      response = prompt('PLEASE ANSWER EXACT!  Would you like to purchase gloves or a mask?')
    }
    if (response === 'gloves') {
      item = '<img src="images/house.png">';
    } else if (response === 'mask') {
      item = '<img src="images/hotel.png">'
    }
    return item;
  }
  
  function howMany(){
    var count = prompt('Great, how many would you like?');
  
    while(isNaN(count) || count === ''){
      count = prompt('PLEASE ENTER A NUMBER!  How many would you like?')
    }
    return count;
  }
  
  function showOrder(){
    var result = '';
  
    //get the item type
    var itemType = getItemType(); 
  
    //find how many they want
    var orderTotal = howMany();
  
    //create a result with correct number of products
    for (var i = 0; i < orderTotal; i++){
      result = result + '<p>' + itemType + '</p>';
    }
  
    // send that order to the web page
    return document.write(result);
  }
  