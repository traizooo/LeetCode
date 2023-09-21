// Define a function called 'map' that takes an array 'arr' and a function 'fn'.
var map = function(arr, fn) {
    // Create an empty array to store the transformed values.
    const result = [];

    // Loop through each element in the input array 'arr'.
    for (let i = 0; i < arr.length; i++) {
        // Apply the mapping function 'fn' to the current element 'arr[i]'
        // and pass its index 'i' as the second argument.
        const transformedValue = fn(arr[i], i);

        // Add the transformed value to the 'result' array.
        result.push(transformedValue);
    }

    // Return the final 'result' array containing the transformed values.
    return result;
};
