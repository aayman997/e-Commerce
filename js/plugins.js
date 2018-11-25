if ($("body").hasClass("homePage")) {
	document.querySelector(".homePage .header").style.height = "calc(100vh - (210px))";
}
$(".owl-products")
	.owlCarousel({
		center: true,
		loop: true,
		autoWidth: false,
		margin: 50,
		nav: true,
		dots: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1024: {
				items: 3,
				center: false,
				margin: 10
			},
			1200: {
				items: 5
			}
		}
	});
$(".owl-products .owl-prev")
	.empty()
	.append('<div class="row h-100"><div class="col my-auto"><i class="fas fa-chevron-left owlsizeicon"></i></div></div>');
$(".owl-products .owl-next")
	.empty()
	.append('<div class="row h-100"><div class="col my-auto"><i class="fas fa-chevron-right owlsizeicon"></i></div></div>');
$(".owl-dots").wrap("<div class='owl-dots-con'></div>");

$(function () {
	$('.navbar-1').data('size', 'big');
});


window.onscroll = function () {
	scrollFunction()
};

function scrollFunction() {
	if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
		document.getElementById("navBarOne").style.height = "90px";
		document.getElementById("navBarTwo").style.height = "40px";
		document.getElementById("navBarTwo").style.top = "90px";
	} else {
		document.getElementById("navBarOne").style.height = "140px";
		document.getElementById("navBarTwo").style.height = "70px";
		document.getElementById("navBarTwo").style.top = "140px";
	}
}