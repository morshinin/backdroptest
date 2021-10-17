const form = document.forms.form;
const backdropFields = form.elements.backdrop;
const backdropRadio = document.getElementsByName('backdropRadio');
const box = document.querySelector('.box');

backdropFields.addEventListener('change', e => {
    let target_type = e.target.type;
    switch (target_type) {
        case 'radio':
            setBackdropType(e);
            break;
        case 'range':
            setRange(e);
            break;
    }
})

function setRange(e) {
    switch (e.target.name) {
        case 'blurRange':
            e.target.closest('.form__group')
                .querySelector('.form__value').innerText = e.target.value;
            box.style.setProperty('--backdrop-filter',
                `blur(${e.target.value}px)`);
            box.innerText = `backdrop-filter: blur(${e.target.value}px)`;
            break;
        case 'brightnessRange':
            e.target.closest('.form__group')
                .querySelector('.form__value').innerText = e.target.value;
            box.style.setProperty('--backdrop-filter',
                `brightness(${e.target.value}%)`);
            box.innerText = `backdrop-filter: brightness(${e.target.value}%)`;
            break;
        case 'contrastRange':
            e.target.closest('.form__group')
                .querySelector('.form__value').innerText = e.target.value;
            box.style.setProperty('--backdrop-filter',
                `contrast(${e.target.value}%)`);
            box.innerText = `backdrop-filter: contrast(${e.target.value}%)`;
            break;
        case 'grayScaleRange':
            e.target.closest('.form__group')
                .querySelector('.form__value').innerText = e.target.value;
            box.style.setProperty('--backdrop-filter',
                `grayscale(${e.target.value}%)`);
            box.innerText = `backdrop-filter: grayscale(${e.target.value}%)`;
            break;
    }
}

function setBackdropType(e) {
    let target_value = e.target.value;
    let val = '';
    let text = 'backdrop-filter: ';

    switch (target_value) {
        case 'blur':
            val = '10px';
            text += `${target_value}(${val})`;
            break;
        case 'brightness':
            val = '40%';
            text += `${target_value}(${val})`;
            break;
        case 'contrast':
            val = '60%';
            text += `${target_value}(${val})`;
            break;
    }

    box.style.setProperty('--backdrop-filter', `${target_value}(${val})`);
    box.innerText = text;
}