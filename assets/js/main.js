var swiper = new Swiper(".mySwiper", {
	slidesPerView: 'auto',
	spaceBetween: 0,
	autoplay: true,
	speed: 1200,
	loop: true,
	slideActiveClass: "swiper-slide-active",
	slideDuplicateNextClass: "swiper-slide-duplicate-next",
	slideDuplicateActiveClass: "swiper-slide-duplicate-active",
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	// Responsive breakpoints
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1,
			spaceBetween: 20
		},
		// when window width is >= 480px
		480: {
			slidesPerView: 2,
			spaceBetween: 30
		},
		// when window width is >= 640px
		640: {
			slidesPerView: 3,
			spaceBetween: 20
		}
	}

});


var swiper2 = new Swiper(".mySwiper2", {
	slidesPerView: 3,
	spaceBetween: 0,
	loop: true,
	autoplay: true,
	speed: 1200,
	slideActiveClass: "swiper-slide-active2",
	slideNextClass: "swiper-slide-next2",
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	// Responsive breakpoints
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 2,
			spaceBetween: 20
		},
		// when window width is >= 480px
		480: {
			slidesPerView: 2,
			spaceBetween: 10
		},
		// when window width is >= 640px
		640: {
			slidesPerView: 3,
			spaceBetween: 10
		}
	}
});


var prevScrollpos = window.pageYOffset;
var currentScrollPos = window.pageYOffset;
var checkView = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)

if (checkView > 768) {
	window.onscroll = function () {
		currentScrollPos = window.pageYOffset;
		if (prevScrollpos > currentScrollPos) {
			document.getElementById("navbar").style.top = "0";
			document.getElementById("navbar").classList.add('scroll-color');
		} else {
			document.getElementById("navbar").style.top = "-80px";
			document.getElementById("navbar").classList.remove('scroll-color');
		}
		prevScrollpos = currentScrollPos;
	}
} else if (checkView < 768) {
	console.log('mobile');
	document.getElementById("navbar").classList.remove('scroll-color');
}


console.log(prevScrollpos);
console.log(checkView);


AOS.init({
	disable: 'mobile'
});
