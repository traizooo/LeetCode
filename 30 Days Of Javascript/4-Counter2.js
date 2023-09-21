/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    startingValue = init;

    return {
        increment: function() {
            init = init + 1;
            return init;
        },
        decrement: function() {
            init = init - 1;
            return init;
        },
        reset() {
            init = startingValue;
            return init;
        }
    }
};


const counter = createCounter(5)
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4
