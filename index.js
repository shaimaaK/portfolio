$(".jumbotron").css({ height: $(window).height() + "px" });

$(window).on("resize", function() {
  $(".jumbotron").css({ height: $(window).height() + "px" });
});
$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);

$(document).ready(function(){
  $(window).scroll(function() { // check if scroll event happened
    if ($(document).scrollTop() > 50) { // check if user scrolled more than 50 from top of the browser window
      $(".fixed-top").css("background-color", "#f8f8f8"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
    } else {
      $(".fixed-top").css("background-color", "transparent"); // if not, change it back to transparent
    }
  });
});
/////////////////////////////
 $(document).ready(function() {
    if($(window).width() < 975) {
        $(".fixed-top").css("background-color", "#f8f8f8");
    }
    else{
			$(".fixed-top").css("background-color", "transparent");
		}
});
$(document).ready(function() {
    // This will fire when document is ready:
    $(window).resize(function() {
        // This will fire each time the window is resized:
        if($(window).width() < 975) {
			$(".fixed-top").css("background-color", "#f8f8f8");
		}
		else{
			$(".fixed-top").css("background-color", "transparent");
		}
    })
});

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


