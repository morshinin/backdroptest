const backdropFields = form.elements.backdrop;
const box = document.querySelector('.box');

backdropFields.addEventListener('input', setRange);

function renderBoxValue(target) {
	target.closest('.form__group')
    .querySelector('.form__value').innerText = target.value;
}

function getPropertyValue(target) {
	let {name, value} = target;
	let units = getUnits(name);
	return `${name}(${value}${units})`;
}

function getUnits(name) {
	return name === 'blur' ? 'px' : '%';
}

function setRange(e) {
	let target = e.target;

    switch (target.name) {
        case 'blur':
        	render(target);
            break;
        case 'brightness':
        	render(target);
            break;
        case 'contrast':
        	render(target);
            break;
        case 'grayscale':
        	render(target);
            break;
    }
}

function render(target) {
    renderBoxValue(target);
    box.style.setProperty('--backdrop-filter', getPropertyValue(target));
    box.innerText = getPropertyValue(target);
}