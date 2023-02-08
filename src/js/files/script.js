// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile, _slideToggle, _slideUp } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

// Реализация меню навигатора
const menuParents = document.querySelectorAll('.menu-page__parent');
if (!isMobile.any()) {
	if (menuParents) {
		for (let index = 0; index < menuParents.length; index++) {
			const menuParent = menuParents[index];
			menuParent.addEventListener('mouseenter', function (e) {
				menuParent.classList.add('_active');
			})
			menuParent.addEventListener('mouseleave', function (e) {
				menuParent.classList.remove('_active');
			})
		}
	}
}

// Добавление класса _active для бургера и сворачивание 
const menuPageBurger = document.querySelector('.menu-page__icon');
const menuPageBody = document.querySelector('.menu-page__body');
_slideUp(menuPageBody);

menuPageBurger.addEventListener('click', function (e) {
	menuPageBurger.classList.toggle('_active');
	_slideToggle(menuPageBody);
})


// Добавление класса _active для поиска и сворачивание
const searchButton = document.querySelector('.search-page__title');
const searchSelectMenu = document.querySelector('.categories-search');
_slideUp(searchSelectMenu)
searchButton.addEventListener('click', function (e) {
	_slideToggle(searchSelectMenu)
	searchButton.classList.toggle('_active');
})
// Работа с чекбоксами в поиске
const checkboxCategories = document.querySelectorAll('.categories-search__checkbox .checkbox__input');

if (checkboxCategories) {
	let i = 0;
	for (let index = 0; index < checkboxCategories.length; index++) {
		const checkboxCategorie = checkboxCategories[index];
		checkboxCategorie.addEventListener('input', function (e) {
			if (checkboxCategorie.checked && i >= 0) {
				++i;
				searchButton.innerHTML = `Выбрано: ${i}`
			} else {
				--i;
				i !== 0 ? searchButton.innerHTML = `Выбрано: ${i}` : searchButton.innerHTML = `Везде`;
			}
		})
	}
}

// Работа с фильтром
const filterBurger = document.querySelector('.filter__icon');
const filterBody = document.querySelector('.filter__body');

if (filterBurger) {
	let lockStatus = true;

	let lockToggle = (delay = 500) => {
		if (filterBurger.classList.contains('_active')) {
			unlockBurger(delay);
		} else {
			lockBurger(delay);
		}
	}

	function unlockBurger(delay = 500) {
		if (lockStatus) {
			filterBurger.classList.remove('_active')
		}
		lockStatus = false;
		setTimeout(function () {
			lockStatus = true;
		}, delay)
	}
	function lockBurger(delay = 500) {
		if (lockStatus) {
			filterBurger.classList.add('_active')
		}
		lockStatus = false;
		setTimeout(function () {
			lockStatus = true;
		}, delay)
	}

	if (isMobile.any()) { _slideUp(filterBody) }
	filterBurger.addEventListener('click', function (e) {
		if (lockStatus) {
			lockToggle();
		}
		_slideToggle(filterBody)
	})
}

// Проверка title


