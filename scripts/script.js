var textStrings = {};
var textBox;
var delayInMilliseconds = 5000;
var operation = "";
var opIndex = 0;
var operations = ["name", "help?"];

var player;
var input;
var log;
var message = "";

function init() {
	input = document.getElementById("input");
	log = document.getElementById("log");
	textBox = document.getElementById("text");
	textStrings["intro"] = "Hi, there! You must be the brave knight we've been wating for. \nPlease, what is your name?";
	textStrings["help"] = " - To go forward: enter N or press the up key <br/> - To go back: enter S or press the down key <br/> - To go left: enter W or press the left key <br/> - To go right: enter E or press the right key <br/> - i : inventory <br/> - h : help <br/> - y or yes for yes <br/> - n or no for no";
	operation = operations[opIndex];

	//Set status
	player = {name: "", X: 4, Y: 4};
	player.name ="";
	
	displayText(textStrings["intro"]);
	

	input.addEventListener("keyup", function(event) {
	  // Cancel the default action, if needed
	  event.preventDefault();
	  // Number 13 is the "Enter" key on the keyboard
	  if (event.keyCode === 13) {
	    // Trigger the button element with a click
	    document.getElementById("submit").click();
	  }
	}); 
}

function displayText(message) {
	//var messageWords = message.split(" ");
	textBox.innerHTML = "";
	textBox.innerHTML = message;
	input.value = "";
	/*for(var index = 0; index < messageWords.length; index++) {
		textBox.innerHTML += messageWords[index] + " ";
		setTimeout(displayWord(messageWords[index]), delayInMilliseconds);
	}*/
}

function logAction(value) {
	log.innerHTML = value + "<br/>" + log.innerHTML;
}

/*function displayWord(word) {
	textBox.innerHTML += word + " ";
}*/



function perform(){
	value = input.value;
	logAction(value);
	console.log(value);
	if(isMove(value))
		movePlayer(value.toLowerCase());
	if(value == "h")
		displayText(textStrings["help"]);
	else if(value =="i")
		displayText(textStrings["inventory"]);
	else{
		switch(operation) {
			case "name": setName(value); break;
			case "help?": displayText(playGame(value)); break;
		}
	}
	
}

//Game operations
/*Set the player's name*/
function setName(value) {
	player.name = value;
	message = "Oh, brave <b><b>" + player.name + "</b></b>, the princess needs your help! \nShe has been kidnapped by the evil oger and trapped in a castle deep in the woods. No one has dared to go after her, for fear of the oger. Will you help save the princess and defeat the oger? <br/><br/>Type 'yes' or 'no'. This is how you will interact with game.";
	operation = operations[++opIndex];
	displayText(message);
}

function playGame(value) {

	return (value == "yes" || value == "y")? "Great! Here are the controls and everything you need to know.<br/>"+textStrings["help"]:"Aw, oh well. I guess we'll have to wait for another";
}

function isMove(value) {
	return (value =="n" || value =="N" || value =="e" || value =="E" || value =="s" || value =="S" || value =="w" || value =="W");
}

function movePlayer(move) {
	if(move == "n" || move == "s"){
		if(move == "n")
			player.Y--;
		else
			player.Y++;
	}

	else if(move == "e" || move == "w"){
		if(move == "w")
			player.X--;
		else
			player.X++;
	}
}
