//Hide all the answers
jQuery("#answer1, #answer2, #answer3").hide();

//Functions to toggle the answers
function toggle1() {
	jQuery("#answer1").slideToggle();
}
function toggle2() {
		jQuery("#answer2").slideToggle();
}

function toggle3() {
		jQuery("#answer3").slideToggle();
}

//Bind functions to clicks

jQuery("#question1").click(toggle1);