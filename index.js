/////////////[ resize the jumbotron to te size of the screen ]//////////////////// 
$(document).ready(function(){

	$(".hero_image").css({ height: $(window).height() + "px" });
	console.log('height is :'+$(window).height())

	$(window).on("resize", function() {
	$(".hero_image").css({ height: $(window).height() + "px" });
	console.log('height is :'+$(window).height())
	});
	$(".hover").mouseleave(
	function () {
		$(this).removeClass("hover");
	}
	);
})
/////////////[ set the color of navbar based on scroll ]//////////////////// 
$(document).ready(function(){
  $(window).scroll(function() { // check if scroll event happened
    if ($(document).scrollTop() > 50) { // check if user scrolled more than 50 from top of the browser window
      $(".fixed-top").css("background-color", "#f8f8f8"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
    } else {
      $(".fixed-top").css("background-color", "transparent"); // if not, change it back to transparent
    }
  });
});
/////////////[ set the color of navbar based on size of screen ON LOAD ]//////////////////// 
 $(document).ready(function() {
    if($(window).width() <= 991) {
        $(".fixed-top").css("background-color", "#f8f8f8");
    }
    else{
			$(".fixed-top").css("background-color", "transparent");
		}
});
/////////////[ set the color of navbar based on size of screen ON WINDOW RESIZE ]//////////////////// 
$(document).ready(function() {
    // This will fire when document is ready:
    $(window).resize(function() {
        // This will fire each time the window is resized:
        if($(window).width() <= 991) {
			$(".fixed-top").css("background-color", "#f8f8f8");
		}
		else{
			$(".fixed-top").css("background-color", "transparent");
		}
    })
});

/////////////[ back to top button appearance & functionality]//////////////////// 
$(document).ready(function(){
	$(window).scroll(function () {
			if ($(document).scrollTop() > 50) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});
});
