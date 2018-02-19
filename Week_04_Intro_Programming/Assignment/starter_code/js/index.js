jQuery(document).ready(function () {


//Function to Read More
function seeReadMore() {
	jQuery("#show-this-on-click").slideDown();
	jQuery(".readmore").hide();
	jQuery(".readless").show();
}

//Function to Read Less
function seeLess(){
	jQuery("#show-this-on-click").slideUp();
	jQuery(".readless").hide();
	jQuery(".readmore").show();
}

//Function to Learn More
function seeLearnMore() {
	jQuery("#learnmoretext").slideToggle();
	jQuery(".learnmore").hide();
}

//Attach functions to clicks

jQuery(".readmore").click(seeReadMore);

jQuery(".readless").click(seeLess)

jQuery(".learnmore").click(seeLearnMore);

});