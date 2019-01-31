const homeHeader = $(".homePage .header"),
	vph = window.innerHeight,
	body = $("body"),
	totalBigNavsHeight = $("#navBarOne").outerHeight() + $("#navBarTwo").outerHeight(),
	categoryHeader = $("body.categoryPage .header");


if ($(body).hasClass("homePage")) {
	if (window.outerWidth > 768) {
		homeHeader.css({
			"height": vph - totalBigNavsHeight,
			"top": totalBigNavsHeight
		});
	} else if (window.outerWidth <= 768) {
		const lgHeight = $(".lg-navbar").outerHeight();
		homeHeader.css({
			"height": vph - lgHeight,
			"top": lgHeight
		});
	}
}

if ($(body).hasClass("categoryPage") && window.outerWidth <= 768) {
	const totalNavsHeight = $(".lg-navbar").outerHeight();
	categoryHeader.css({
		"marginTop": totalNavsHeight
	});
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
				items: 1,
				center: false
			},
			768: {
				items: 3
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
	if ($(body).hasClass("categoryPage") || $(body).hasClass("cartPage") || $(body).hasClass("homePage") || $(body).hasClass("productPage") || $(body).hasClass("profilePage")) {
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
}

//Side Menu Settings
let sideMenuHeight = $(".side-menu").height();

$("sideMenuHeight").on("resize", function () {
	$("body").height(sideMenuHeight);
});

function menuOpen() {
	$("#sideMenu").animate({width: '100vw'}, 400);
	$(".side-menu-con").delay(200).fadeTo(400, 1).trigger("menuOpened");
	$("body").css("overflow", "hidden");
}

function filterMenuOpen() {
	$("#filterMenu").animate({width: '100vw'}, 400);
	$(".side-menu-con").delay(200).fadeTo(400, 1).trigger("menuOpened");
	$("body").css("overflow", "hidden");
}

function menuClose() {
	$(".side-menu-con").fadeTo(400, 0).trigger("menuClosed");
	$(this).parents(".side-menu").delay(100).animate({width: '0'}, 400);
	$("body").css("overflow", "scroll");
}

$(".lg-navbar .fa-bars").on("click", menuOpen);
$(".side-menu .close-menu p").on("click", menuClose);

// Global For Side-Menu & filter

// Specific For Side-Menu

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
//Side Menu Settings End

//Filter Menu Open Settings
$("button.filter").on("click", filterMenuOpen);

//order-information

$(".show-order-summery-info i").on("click", function () {
	if ($(this).parent().hasClass("closed")) {
		$(".order-information").slideDown();
		$(this).removeClass("fa-chevron-down");
		$(this).addClass("fa-chevron-up");
		$(this).parent().removeClass("closed");
	} else {
		$(".order-information").slideUp();
		$(this).addClass("fa-chevron-down");
		$(this).removeClass("fa-chevron-up");
		$(this).parent().addClass("closed");
	}
});

//Product-Page
$(".owl-product-imgs")
	.owlCarousel({
		center: true,
		loop: true,
		autoWidth: false,
		margin: 0,
		nav: true,
		dots: false,
		items: 5,
		mouseDrag: false,
	});

$(".owl-product-imgs .owl-prev")
	.empty()
	.append('<div class="row h-100 m-0"><div class="col my-auto"><i class="fas fa-chevron-left owlsizeicon"></i></div></div>');
$(".owl-product-imgs .owl-next")
	.empty()
	.append('<div class="row h-100 m-0"><div class="col my-auto"><i class="fas fa-chevron-right owlsizeicon"></i></div></div>');


const gallImgEle = $(".gallery-imgs"),
	gallImgHeight = Math.floor(gallImgEle.height()),
	gallImgWidth = Math.floor(gallImgEle.width());
console.log(gallImgEle);
console.log(gallImgHeight);
console.log(gallImgWidth);

// noinspection JSSuspiciousNameCombination
$(".gallery-imgs-con").css({
	"height": gallImgWidth,
	"width": gallImgHeight
});