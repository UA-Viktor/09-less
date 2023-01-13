const showThis = function (...args) {
    console.log(args);
    console.log(this);
}

showThis();

const objA = {
    a: 5,
    b: 10,
}

showThis.call(objA, 5, 1, 1, 2);

showThis.apply(objA, [5, 1, 1, 2]);


// .bind - делайет привязку

