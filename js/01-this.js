// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//     },
// };
// user.showTag();


// const foo = function () {
//     console.log('foo -> this', this);
// }
// foo(); 


// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log(this);
//         console.log(this.tag);
//     }
// }
// user.showTag();
// const outer = user.showTag;
// outer();


// const make = function () {
//     const change = function () {
//           console.log(this);
//     }
//     const sweter = {
//         color: ' teal',
//     }
//     sweter.updateColor = change;
//     sweter.updateColor('red')
//     return sweter.updateColor;
// }
// make();
// const swap = make();
// swap('blue');





const counter = {
    value: 0,
    increment(value) {
        this.value += value;
    },
    decrement(value) {
        this.value -= value;
    },

}

const update = function (value, operation) {
    operation(value);
}


update(10, counter.increment);