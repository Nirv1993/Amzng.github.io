
// JavaScript to handle the scroll event

window.addEventListener('scroll', function () {
    var header = document.querySelector('header');

    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// -------------text-slider------------------------

// -----------------------------------------------------

document.addEventListener("DOMContentLoaded", function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slide");
    const slideCount = slides.length;

    function showSlide(index) {
        slides.forEach((slide) => {
            slide.style.display = "none";
        });
        slides[index].style.display = "block";
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slideCount;
        showSlide(currentSlide);
    }

    // Auto-advance to the next slide every 3 seconds (adjust as needed)
    setInterval(nextSlide, 5000);

    // Show the initial slide
    showSlide(currentSlide);
});



// -------------------------section6------------------------------------

if (document.querySelector(".accordion") !== null) {
	const acc = document.getElementsByClassName("accordion");

	openFirstAccTab();

	// Here the accordion can close all tabs
	for (let i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function () {
			if (!this.classList.contains("active")) {
				closeAccTabs();
				toggleAcc(this);
				console.log("Non Active");
			} else {
				closeAccTabs();
				console.log("Active");
			}
		});
	}

	// If you want one block in accordion to be always open
	// for (let i = 0; i < acc.length; i++) {
	// 	acc[i].addEventListener("click", function () {
	// 		closeAccTabs();
	// 		toggleAcc(this);
	// 	});
	// }

	// Open/close tab
	function toggleAcc(e) {
		e.classList.toggle("active");
		var panel = e.nextElementSibling;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	}

	// Closing an open accordion tab when clicking on another one (if needed)
	function closeAccTabs() {
		for (let i = 0; i < acc.length; i++) {
			if (acc[i].classList.contains("active")) {
				acc[i].classList.remove("active");
				acc[i].nextElementSibling.removeAttribute("style");
			}
		}
	}

	// Open first accordion tab by default
	function openFirstAccTab() {
		if (!acc[0].classList.contains("active")) {
			acc[0].classList.add("active");
			acc[0].nextElementSibling.style.maxHeight =
				acc[0].nextElementSibling.scrollHeight + "px";
		}
	}

	// When resizing - auto-height adjustment
	window.addEventListener(
		"resize",
		function () {
			for (let i = 0; i < acc.length; i++) {
				if (acc[i].classList.contains("active")) {
					acc[i].nextElementSibling.style.maxHeight =
						acc[i].nextElementSibling.scrollHeight + "px";
				}
			}
		},
		true
	);
}


// -------------------------section8------------------------------------

// Acc
$(document).on("click", ".naccs .menu div", function() {
	var numberIndex = $(this).index();

	if (!$(this).is("active")) {
		$(".naccs .menu div").removeClass("active");
		$(".naccs ul li").removeClass("active");

		$(this).addClass("active");
		$(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");

		var listItemHeight = $(".naccs ul")
			.find("li:eq(" + numberIndex + ")")
			.innerHeight();
		$(".naccs ul").height(listItemHeight + "px");
		
	}

});

// ----------------------------section9------------------------------
/* Demo purposes only */
$(".hover").mouseleave(
	function () {
	  $(this).removeClass("hover");
	}
  );
  
// ----------------------------section12------------------------------
$(document).ready(function(){

	var $sm = 480;
	var $md = 768;
 
	function resizeThis() {
	   $imgH = $('.middle img').width();
	   if ($(window).width() >= $sm) {
		  $('.left,.right,.section').css('height', $imgH);
	   } else {
		  $('.left,.right,.section').css('height', 'auto');
	   }
	}
 
	resizeThis();
 
	$(window).resize(function(){
	   resizeThis();
	});
 
	$(window).scroll(function() {
	   $('.section').each(function(){
		  var $elementPos = $(this).offset().top;
		  var $scrollPos = $(window).scrollTop();
 
		  var $sectionH = $(this).height();
		  var $h = $(window).height();
		  var $sectionVert = (($h/2)-($sectionH/4));
 
 
		  if (($elementPos - $sectionVert) <= $scrollPos && ($elementPos - $sectionVert) + $sectionH > $scrollPos) {
			 $(this).addClass('animate');
		  } else {
			 $(this).removeClass('animate');
		  }
	   });
	});
 
	$('.btn-primary').click(function(){
	   alert('I lied');
	});
 });

//  ------------------------------------------------------------------------------------

