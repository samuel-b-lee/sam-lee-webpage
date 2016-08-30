$(document).ready(function() { 

/*--------------------------interests picture animations-----------------------------*/
	//large pictures
	$('.i-d-large').hover(function() {

		$(this).animate({
	        height: "335px",
	        width: "235px",
    	},300);

		$('.interests-text', this).fadeTo(400, 1)

	}, function(){
		$(this).animate({
	        height: "325px",
	        width: "225px"
    	},200, function(){ 

    	});

		$('.interests-text', this).fadeTo(600, 0)

	})

	//small pictures
	$('.i-d-small').hover(function() {

		$(this).animate({
	        height: "310px",
	        width: "235px",
    	},300);

		$('.interests-text', this).fadeTo(400, 1)

	}, function(){
		$(this).animate({
	        height: "300px",
	        width: "225px"
    	},200, function(){ 

    	});

		$('.interests-text', this).fadeTo(600, 0)

	})
/*--------------------------------------------------------------------------------------*/
});

