import * as noUiSlider from 'nouislider';

const priceSlider = document.querySelector('.price-filter__slider');
const inputsPriceSlider = document.querySelectorAll('.values-price-filter__column .input');

if (inputsPriceSlider.length) {
	noUiSlider.create(priceSlider, {
		start: [0, 100000],
		connect: true,
		tooltips: [wNumb({ decimals: 0 }), wNumb({ decimals: 0 })],
		range: {
			'min': 0,
			'max': 200000
		}
	});
	priceSlider.noUiSlider.on('update', function (values, handle) {
		Array.from(inputsPriceSlider)[handle].placeholder = Number(values[handle]).toFixed(0);
	})

	inputsPriceSlider.forEach((item, index) => {
		item.addEventListener('input', function (e) {
			index == 0 ? priceSlider.noUiSlider.setHandle(index, item.value) : priceSlider.noUiSlider.setHandle(index, item.value);
		})
	})
}