/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe: function(otherVal) {
            if (val === otherVal) {
                return (true);
            } else {
                throw new Error ("Not Equal");
            }
        },
        notToBe: function(otherVal) {
            if (val !== otherVal) {
                return (true);
            } else {
                throw new Error ("Equal");
            }
        }
    }
};


try {
    expect(5).notToBe(5); // Output: true
} catch (error) {
    console.error(error.message); // This will not be executed
}