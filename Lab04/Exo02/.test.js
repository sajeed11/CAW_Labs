const concatenation = require('./Exo2.js');

function first(array, n) {
    if (array == null || n <= 0)
        return [];
    if (n == null)
        return array[0];
    return array.slice(0, n);
}

function last(array, n) {
    if (array == null)
        return [];
    if (n == null)
        return array[array.length - 1];
    return array.slice(Math.max(array.length - n, 0));
}

test("We suppose get the first element of an array", () => { 
    expect(first([7, 9, 0, -2])).toBe(7);
})

test("We suppose get the last element of an array", () => { 
    expect(last([7, 9, 0, -2])).toBe(-2);
})

test("We suppose to get the concatination of an string array", () => {
    const originalConsoleLog = console.log;
    console.log = jest.fn();

    // The testing components
    const inputArray = ["Hello", "world", "!"];
    const expectedOutput = "Hello world !";

    const result = concatenation(inputArray);

    expect(console.log).toHaveBeenCalledWith(expectedOutput);
})