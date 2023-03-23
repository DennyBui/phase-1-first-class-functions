function receivesAFunction(callback) {
    callback();
}
function returnsANamedFunction() {
    return function namedFunction() {
        console.log("Hello, there! General Konobi!");
    };
}
function returnsAnAnonymousFunction() {
    return function () {
        console.log("Hello, there! General Konobi")
    };
}