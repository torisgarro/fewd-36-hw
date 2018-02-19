jQuery(document).ready(function(){

    
    // When purple box is clicked, set all paragraphs to be purple
    function Purple(){
    	jQuery("p").css("color", "purple");
    }

    jQuery("#purpleBox").click(Purple);


    // When the blue box is clicked set the hipster paragraph to have white text with a blue background.  All other paragraphs should be black
    function Blue(){
  		jQuery("p").css("color", "black");
  		jQuery("p.hipsterSpeak").css("color", "white");
  		jQuery("p.hipsterSpeak").css("background", "blue");
    }

    jQuery("#blueBox").click(Blue);

    // When the red box is clicked set the list items toggle red background and white text on and off

    function red(){
    	jQuery("li").toggleClass(".redForm");
    }

    jQuery("#redBox").click(red);
    

    // When any of the boxes are clicked, add a 6px solid black bottom border

    


});