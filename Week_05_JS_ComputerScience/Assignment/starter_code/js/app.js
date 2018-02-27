//Add document ready function
jQuery(document).ready(function(){

//Get user input
jQuery("#submit-btn").click(function(){
	event.preventDefault();

	var city = jQuery("#city-type").val();
	city = city.toLowerCase().trim();

//If user input is New York, change background image to New York
	if(city == "new york" || city == "new york city" || city == "nyc") {
		jQuery("body").attr("class", "nyc");
	}

//If user input is San Francisco, change background image to San Francisco
	else if(city == "san francisco" || city == "sf" || city =="bay area") {
		jQuery("body").attr("class", "sf");
	}

//If user input is Los Angeles, change background image to Los Angeles
	else if(city == "los angeles" || city =="la" || city == "lax") {
		jQuery("body").attr("class", "la");
	}

//If user input is Austin, change background image to Austin
	else if(city == "austin" || city == "atx") {
		jQuery("body").attr("class", "austin");
	}

//If user input is Sydney, change background image to Sydney
	else if(city == "sydney" || city == "syd") {
		jQuery("body").attr("class", "sydney");
	}

});


});