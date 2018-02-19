//Implement the red light using jQuery. Don't forget to add the script tags.
//Don't forget to add the scripts tags

//Red
function illuminateRed(){
	//Clear all lights
	jQuery(".bulb").css("background", "black");
	//Light red
	jQuery("#stopLight").css("background", "red");
}

//Yellow
function illuminateYellow(){
	//Clear all lights
	jQuery(".bulb").css("background", "black");
	//Light red
	jQuery("#slowLight").css("background", "yellow");
}

//Green
function illuminateGreen(){
	//Clear all lights
	jQuery(".bulb").css("background", "black");
	//Light red
	jQuery("#goLight").css("background", "green");
}

jQuery("#stopButton").click(illuminateRed);
jQuery("#slowButton").click(illuminateYellow);
jQuery("#goButton").click(illuminateGreen);