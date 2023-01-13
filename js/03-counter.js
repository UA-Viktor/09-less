const counter = {
    value: 0,
    incr() {
        this.value += 1;
    },

    decr() {
        this.value -= 1;
    },
};

const decr = document.querySelector('.js-decr');
const incr = document.querySelector('.js-incr');
const valueEl = document.querySelector('.js-value');

decr.addEventListener('click', function () {
    counter.decr();
    valueEl.textContent = counter.value;
});

incr.addEventListener('click', function () {
    counter.incr();
    valueEl.textContent = counter.value;
});
