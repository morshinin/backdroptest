const backdropFields = form.elements.backdrop;
const box = document.querySelector('.box');

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