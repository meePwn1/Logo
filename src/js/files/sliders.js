/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper, { Pagination, Autoplay, Navigation, Thumbs } from 'swiper';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
	// Список слайдерів
	// Перевіряємо, чи є слайдер на сторінці
	if (document.querySelector('.mainslider__slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.mainslider__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Pagination, Autoplay],
			// direction: 'vertical',
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			//lazy: true,


			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},


			// Пагінація

			pagination: {
				el: '.mainslider__pagination',
				clickable: true,
			},


			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "вліво/вправо"
			/*navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},*/
			/*
			// Брейкпоінти
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// Події
			on: {

			}
		});
		const mainSliderImages = document.querySelectorAll('.mainslider__img-ibg img');
		const mainSliderDots = document.querySelectorAll('.mainslider__pagination .swiper-pagination-bullet');

		for (let index = 0; index < mainSliderImages.length; index++) {
			const mainSliderImage = mainSliderImages[index].getAttribute('src');
			mainSliderDots[index].style.backgroundImage = `url("${mainSliderImage}")`
		}
	}

	if (document.querySelector('.products-slider__slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.products-slider__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Pagination, Autoplay, Navigation],
			// direction: 'vertical',
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			//lazy: true,


			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},


			// Пагінація

			pagination: {
				el: '.products-slider__info',
				type: 'fraction',
			},


			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.products-slider__arrow_prev',
				nextEl: '.products-slider__arrow_next',
			},

			// Брейкпоінти
			breakpoints: {
				320: {
					autoplay: false
				},
				992: {
				}
			},

			// Події
			on: {

			}
		});

	}
	if (document.querySelector('.brands-slider__slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.brands-slider__slider', {
			modules: [Autoplay, Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 5,
			spaceBetween: 55,
			speed: 800,
			loop: true,
			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.brands-slider__arrow_prev',
				nextEl: '.brands-slider__arrow_next',
			},
			// Брейкпінти
			breakpoints: {
				320: {
					slidesPerView: 1,
					autoHeight: true,
				},
				480: {
					spaceBetween: 15,
					slidesPerView: 2,
				},
				768: {
					spaceBetween: 20,
					slidesPerView: 3,
				},
				992: {
					spaceBetween: 30,
					slidesPerView: 4,
				},
				1180: {
					slidesPerView: 5,
				},
			},
		});

	}
	if (document.querySelector('.images-product')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер

		let productGallery = new Swiper('.images-product__subslide', {
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [],
			observer: true,
			observeParents: true,
			slidesPerView: 4,
			spaceBetween: 12,
			autoHeight: true,
			speed: 800,
			loop: true,

		});
		new Swiper('.images-product__mainslide', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Thumbs],
			// direction: 'vertical',
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 10,
			autoHeight: true,
			speed: 800,
			thumbs: {
				swiper: productGallery,
			},
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
						// Ефекти
						effect: 'fade',
						autoplay: {
							delay: 3000,
							disableOnInteraction: false,
						},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "вліво/вправо"
			/*navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},*/
			/*
			// Брейкпоінти
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
		});
	}
}
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск ініціалізації слайдерів
	initSliders();
	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	//initSlidersScroll();
});