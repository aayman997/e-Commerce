const homeHeader = $(".homePage .header"),
	vph = window.innerHeight,
	body = $("body");
console.log(vph);
if ($(body).hasClass("homePage")) {
	if (window.outerWidth > 768) {
		const totalNavsHeight = $("#navBarOne").outerHeight() + $("#navBarTwo").outerHeight();
		homeHeader.css({
			"height": vph - totalNavsHeight,
			"top": totalNavsHeight
		});
		console.log(homeHeader.height());
	} else if (window.outerWidth <= 768) {
		const lgHeight = $(".lg-navbar").outerHeight();
		homeHeader.css({
			"height": vph - lgHeight,
			"top": lgHeight
		});
	}
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

//Side Menu Settings
let sideMenuHeight = $(".side-menu").height();

$("sideMenuHeight").on("resize", function () {
	$(body).height(sideMenuHeight);
	$(body).css("overflow", "hidden");
});

function menuOpen() {
	$(".side-menu").animate({width: '100vw'}, 400);
	$(".side-menu-con").delay(200).fadeTo(400, 1).trigger("menuOpened");
}

function menuClose() {
	$(".side-menu-con").fadeTo(400, 0).trigger("menuClosed");
	$(this).parents(".side-menu").delay(100).animate({width: '0'}, 400);
}

$(".lg-navbar .fa-bars").on("click", menuOpen);
$(".side-menu .close-menu p").on("click", menuClose);

$(".sec-header").on("click", function () {
	if ($(this).hasClass("opened")) {
		$(this).removeClass("opened").trigger("innerSectionOpened");
		$(this).addClass("closed");
		$(this).children("i").removeClass("fa-minus");
		$(this).children("i").addClass("fa-plus");
		$(this).siblings(".inner-sections").slideUp(200);
	} else if ($(this).hasClass("closed")) {
		$(this).removeClass("closed").trigger("innerSectionOpened");
		$(this).addClass("opened");
		$(this).children("i").removeClass("fa-plus");
		$(this).children("i").addClass("fa-minus");
		$(this).siblings(".inner-sections").slideDown(200);
	}
});

$(".side-menu-con").on("menuOpened", function () {
	if (sideMenuHeight <= window.innerHeight) {
		console.log(window.innerHeight);
		$("body").css({
			height: window.innerHeight,
			overflow: "hidden"
		});
	} else if (sideMenuHeight > window.innerHeight) {
		$(".sec-header").on("innerSectionOpened", function () {
			$("body").css({
				height: sideMenuHeight,
				overflow: "hidden"
			});
		})
	}
});


$(".side-menu-con").on("menuClosed", function () {
	$("body").css({
		height: "auto",
		overflow: "scroll"
	});
});

