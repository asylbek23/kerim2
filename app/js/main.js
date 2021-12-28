$(document).ready(function () {

	// Активное меню при скролле
	let headerHeight = document.querySelector('.header').clientHeight;

	window.addEventListener('scroll', () => {
		let scrollDistance = window.scrollY;
		console.log(scrollDistance);

		if (el.offsetTop - headerHeight <= scrollDistance) {
			document.querySelectorAll('.header__item').forEach((el) => {
				if (el.classList.contains('active')) {
					el.classList.remove('active');
				}
			});
			document.querySelectorAll('.header__item')[i].classList.add('active');
		}
	});

	// Tooltipts
	$('.tooltips__one img').hover(function () {
		$('.tooltips__one').children().toggleClass('active');
	});

	$('.tooltips__two img').hover(function () {
		$('.tooltips__two').children().toggleClass('active');
	});

	$('.tooltips__three img').hover(function () {
		$('.tooltips__three').children().toggleClass('active');
	});

	$('.tooltips__four img').hover(function () {
		$('.tooltips__four').children().toggleClass('active');
	});

	// Маска для input
	$('input[name=phone]').mask("+7 (999) 999-99-99");

	// Прокрутка вниз
	$(".slide_down").on("click", function () {

		headerMenuLines.classList.remove('active');
		headerMenuBlock.classList.remove('active');

		var currentBlock = $(this).attr("href"),
			currentBlockOffset = $(currentBlock).offset().top;
		$("html, body").animate({
			scrollTop: currentBlockOffset - 1
		}, 1000);
	});


	//-------------------- TABS -------------------->
	(function () {

		let tabs = $("#js-tabs");
		let cards = $("#js-cards");
		let cards2 = $("#js-cards2");
		let tab = null;

		let plans = Object.keys(window.PLANS); // Объект ключи >>> Массив

		let items = $(
			plans.map(function (item) {
				return '<li class="tab">' + item + "</li>";
			})
			.join("")
		); // [li.tab, li.tab, li.tab]

		items.on("click", function () {
			let item = $(this); // [li.tab]
			items.removeClass("active"); // [li.tab.active, li.tab, li.tab]
			item.addClass("active"); // [li.tab.active]
			renderCards(item.html());
		});

		tab = $(items[0]); // Выбор таба из массива window.PLANS
		tab.trigger("click"); // Автоматическое нажатие на таб
		tabs.html(items); // Вставляет полученный элемент из items в html

		function renderCards(active) {
			let apparts = window.PLANS[active];

			let items = $(
				apparts.map(function (item) {
					return (
						`<div class="layouts_item swiper-slide" data-src="${item.image}">
								<div class="layouts_item__img">
									<img src="${item.image}" alt="${item.name} (${item.square})"/>
								</div>
								<div class="layouts_item__descr">
									<div class="layouts_item__title">Площадь</div>
									<div class="layouts_item__size">${item.square}</div>
								</div>
								<button data-hystmodal="#myModal" class="layouts_item__btn">
									Оставить заявку
								</button>
							</div>`
					);
				})
				.join("")
			); // Возвр. каждый .layouts__item

			let items2 = $(
				apparts.map(function (item) {
					return (
						`<div class="layouts_item swiper-slide" data-src="${item.image}">
								<div class="layouts_item__img">
									<img src="${item.image}" alt="${item.name} (${item.square})"/>
								</div>
								<div class="layouts_item__descr">
									<div class="layouts_item__title">Площадь</div>
									<div class="layouts_item__size">${item.square}</div>
								</div>
								<button class="layouts_item__btn">
									Оставить заявку
								</button>
							</div>`
					);
				})
				.join("")
			); // Возвр. каждый .layouts__item

			let btns = items.find(".layouts_item");

			btns.on("click", function (e) {
				// e.stopPropagation();
				// e.hide();
				console.log(e);
			});

			cards.html(items); // Возвращает. ul#js-cards.layouts__item
			cards2.html(items2); // Возвращает. ul#js-cards2.layouts__item

			if (window.lightGallery) {
				window.lightGallery(cards[0], {
					controls: true,
					download: false,
				});
			}

			if (window.lightGallery) {
				window.lightGallery(cards2[0], {
					controls: true,
					download: false,
				});
			}

			const modal = document.querySelector("#myModal");
			const shadow = document.querySelector('.hystmodal__shadow');
			const page = document.querySelector('.page');
			const header = document.querySelector('.header');

			document.querySelectorAll(".layouts_item__btn").forEach(el => {
				el.addEventListener('click', (e) => {
					e.stopPropagation();
					modal.classList.add('hystmodal--active');
					page.classList.add('active');
					header.classList.add('active');
					shadow.classList.add('hystmodal__shadow--show');
				});
			});

			const histmodalClose = document.querySelector(".hystmodal__close");
				histmodalClose.addEventListener("click", () => {
					modal.classList.remove("hystmodal--active");
					page.classList.remove('active');
					header.classList.remove('active');
					shadow.classList.remove('hystmodal__shadow--show');
			});

		}
	})();

});

// Hystmodal
const myModal = new HystModal({
	linkAttributeName: "data-hystmodal",
	catchFocus: false // удаляет фокус
});

//-------------------- Yandex MAPS -------------------->

// Map 1
(function () {
	ymaps.ready(function () {
		let map = new ymaps.Map("map", {
			center: [51.114600, 71.520014],
			zoom: 15,
			controls: ["zoomControl", "fullscreenControl"],
		});

		map.behaviors.disable("scrollZoom");

		let places = [{
				coors: [51.12051917593943, 71.47994516049272],
				icon: "img/map/drama.svg",
				size: [214, 56.44],
				offset: [350, 0],
			},
			{
				coors: [51.116410, 71.509543],
				icon: "img/map/park.svg",
				size: [195, 56.44],
				offset: [5, 5],
			},
			{
				coors: [51.112241, 71.511931],
				icon: "img/map/bridge.svg",
				size: [208, 56.44],
				offset: [5, 5],
			},
			{
				coors: [51.10913772125309, 71.53515895811051],
				icon: "img/map/kindergarten.svg",
				size: [94, 56.44],
				offset: [0, 0],
			},
			{
				coors: [51.112604, 71.531650],
				icon: "img/map/station.svg",
				size: [195, 56.44],
				offset: [-70, 0],
			},
			{
				coors: [51.10999, 71.53715],
				icon: "img/map/school.svg",
				size: [94, 56.44],
				offset: [-12, -12],
			},
			{
				coors: [51.114540, 71.543080],
				icon: "img/map/logo.svg",
				size: [94, 86],
				offset: [-12, -12],
			},
		];

		let placemarks = places.map(function (item) {
			return new ymaps.Placemark(
				item.coors, {
					hintContent: item.hint,
				}, {
					iconLayout: "default#imageWithContent",
					iconImageHref: item.icon,
					iconImageSize: item.size,
					iconImageOffset: item.offset,
				}
			);
		});

		placemarks.forEach(function (item) {
			map.geoObjects.add(item);
		});
	});
})();

// Map 2
(function () {
	ymaps.ready(function () {
		let map = new ymaps.Map("map2", {
			// center: [51.114600, 71.520014],
			// center: [51.10881602010706,71.53079784082028],
			// center: [51.10838376700564,71.53663432763672],
			// center: [51.1092482691444,71.53526103662111],
			center: [51.11097722465317, 71.52873790429688],
			zoom: 14,
			controls: ["zoomControl", "fullscreenControl"],
		});

		map.behaviors.disable("scrollZoom");

		let places = [{
				coors: [51.12051917593943, 71.47994516049272],
				icon: "img/map/drama_m.svg",
				size: [128, 27],
				offset: [350, 0],
			},
			{
				coors: [51.116410, 71.509543],
				icon: "img/map/park_m.svg",
				size: [114, 27],
				offset: [5, 5],
			},
			{
				coors: [51.112241, 71.511931],
				icon: "img/map/bridge_m.svg",
				size: [127, 27],
				offset: [5, 5],
			},
			{
				coors: [51.10913772125309, 71.53515895811051],
				icon: "img/map/kindergarten_m.svg",
				size: [51, 27],
				offset: [0, 0],
			},
			{
				coors: [51.112604, 71.531650],
				icon: "img/map/station_m.svg",
				size: [121, 27],
				offset: [-70, 0],
			},
			{
				coors: [51.10999, 71.53715],
				icon: "img/map/school_m.svg",
				size: [51, 27],
				offset: [-12, -12],
			},
			{
				coors: [51.114540, 71.543080],
				icon: "img/map/logo_m.svg",
				size: [41.18, 46],
				offset: [-12, -12],
			},
		];

		let placemarks = places.map(function (item) {
			return new ymaps.Placemark(
				item.coors, {
					hintContent: item.hint,
				}, {
					iconLayout: "default#imageWithContent",
					iconImageHref: item.icon,
					iconImageSize: item.size,
					iconImageOffset: item.offset,
				}
			);
		});

		placemarks.forEach(function (item) {
			map.geoObjects.add(item);
		});
	});
})();

// Map 3
(function () {
	ymaps.ready(function () {
		let map = new ymaps.Map("map3", {
			// center: [51.114600, 71.520014],
			center: [51.11177591859899, 71.52741684722145],
			zoom: 15,
			controls: ["zoomControl", "fullscreenControl"],
		});

		map.behaviors.disable("scrollZoom");

		let places = [{
				coors: [51.12888429739573, 71.61100661920166],
				icon: "img/map/drama.svg",
				size: [214, 56.44],
				offset: [350, 0],
			},
			{
				coors: [51.116410, 71.509543],
				icon: "img/map/park.svg",
				size: [195, 56.44],
				offset: [5, 5],
			},
			{
				coors: [51.112241, 71.511931],
				icon: "img/map/bridge.svg",
				size: [208, 56.44],
				offset: [5, 5],
			},
			{
				coors: [51.10913772125309, 71.53515895811051],
				icon: "img/map/kindergarten.svg",
				size: [94, 56.44],
				offset: [0, 0],
			},
			{
				coors: [51.112604, 71.531650],
				icon: "img/map/station.svg",
				size: [195, 56.44],
				offset: [-70, 0],
			},
			{
				coors: [51.10999, 71.53715],
				icon: "img/map/school.svg",
				size: [94, 56.44],
				offset: [-12, -12],
			},
			{
				coors: [51.114540, 71.543080],
				icon: "img/map/logo.svg",
				size: [94, 86],
				offset: [-12, -12],
			},
		];

		let placemarks = places.map(function (item) {
			return new ymaps.Placemark(
				item.coors, {
					hintContent: item.hint,
				}, {
					iconLayout: "default#imageWithContent",
					iconImageHref: item.icon,
					iconImageSize: item.size,
					iconImageOffset: item.offset,
				}
			);
		});

		placemarks.forEach(function (item) {
			map.geoObjects.add(item);
		});
	});
})();

// Липкий меню
const header = document.querySelector('.header');
const nav = document.querySelector('.header__content');
const headerNav = document.querySelector('.header__nav');
const headerMenuBtn = document.querySelector('.header__menu_btn');
const headerContainer = document.querySelector('.header .container');
const headerItems = document.querySelector('.header__items');
const headerMenu = document.querySelector('.header__menu');
const headerContent = document.querySelector('.header__content');
window.addEventListener('scroll', fixNav);

function fixNav() {
	if (window.scrollY > nav.offsetHeight + 150) {
		header.classList.add('fixed');
		nav.classList.add('fixed');
		headerMenuBtn.classList.add('fixed');
		headerNav.classList.add('fixed');
		headerItems.classList.add('fixed');
		headerMenu.classList.add('fixed');
		headerContent.classList.add('fixed');
		headerContainer.classList.add('fixed');
	} else {
		header.classList.remove('fixed');
		nav.classList.remove('fixed');
		headerMenuBtn.classList.remove('fixed');
		headerNav.classList.remove('fixed');
		headerItems.classList.remove('fixed');
		headerMenu.classList.remove('fixed');
		headerContent.classList.remove('fixed');
		headerContainer.classList.remove('fixed');
	}
}

const headerItem = document.querySelectorAll('.header__item');

headerItem.forEach((item) => {
	item.addEventListener('click', () => {
		if (item.classList.contains('active')) {
			item.classList.remove('active');
		}
	});
});

// Меню анимация крестика
const headerMenuBtnLines = document.querySelector('.header__menu_btn .menu_lines');
const headerMenuLines = document.querySelector('.header__menu_btn');
const headerMenuBlock = document.querySelector('.header_menu');
const headerMenuItem = document.querySelector('li.header_menu__item a');

headerMenuBtnLines.addEventListener('click', () => {
	headerMenuLines.classList.toggle('active');
	headerMenuBlock.classList.toggle('active');
});

const swiper2 = new Swiper('.layouts__items_mobile', {
	slidesPerView: 2,
	spaceBetween: 15,
	loop: false,
	cssMode: true,
	navigation: {
		nextEl: '.swiper-next',
		prevEl: '.swiper-prev'
	},
	pagination: {
		el: ".swiper-pagination",
	},
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1,
			// loop: true,
		},

		600: {
			slidesPerView: 2,
		},
	}

});