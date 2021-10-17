const backdropFields = form.elements.backdrop;
const box = document.querySelector('.box');
const values = {
	blur: 'px',
	brightness: '%',
	contrast: '%',
	grayscale: '%',
	invert: '%',
	opacity: '%',
	sepia: '%',
}

for (let [key, value] of Object.entries(values)) {
	backdropFields.insertAdjacentHTML('beforeend', `
		<div class="form__group">
            <label for="${key}" class="form__label">${key}</label>
            <input type="range" class="form__control" min="0" max="100" 
            name="${key}" id="${key}">
            <span class="form__value">0</span>${value}
        </div>
	`);
}

backdropFields.addEventListener('input', e => {
	render(e.target);
});

function getPropertyValue(target) {
	let {name, value} = target;
	let units = getUnits(name);
	return `${name}(${value}${units})`;
}

function getUnits(name) {
	return name === 'blur' ? 'px' : '%';
}

function render(target) {
	let property_value = getPropertyValue(target);

	target.closest('.form__group').querySelector('.form__value').innerText = target.value;
    box.style.setProperty('--backdrop-filter', property_value);
    box.innerText = property_value;
}