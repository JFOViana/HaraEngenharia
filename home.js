const mobileMenu = document.querySelector(".mobile-menu");

let open = false;

function toggleMobileMenu() {
  open = !open;
  if (!open) mobileMenu.classList.remove("open");
  else mobileMenu.classList.add("open");
}





$('.header-topo a[href^="#"]').on('click', function(e) {
	e.preventDefault();
	var id = $(this).attr('href'),
			targetOffset = $(id).offset().top;
			
	$('html, body').animate({ 
		scrollTop: targetOffset - 100
	}, 500);
});

$('.menu a[href^="#"]').on('click', function(e) {
	e.preventDefault();
	var id = $(this).attr('href'),
			targetOffset = $(id).offset().top;
			
	$('html, body').animate({ 
		scrollTop: targetOffset - 100
	}, 500);
});