const concatenation = require('./Exo2');

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

function chunk(array, size) {
  var chunkedArr = [];
  var index = 0;
  while (index < array.length) {
    chunkedArr.push(array.slice(index, size + index));
    index += size;
  }
  return chunkedArr;
}

test("We suppose get the first element of an array", () => { 
    expect(first([7, 9, 0, -2])).toBe(7);
})

test("We suppose get the last element of an array", () => { 
    expect(last([7, 9, 0, -2])).toBe(-2);
})

test("We suppose to get the concatination of an string array", () => {
      const consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
      const consoleLogSpy1 = jest.spyOn(console, "log").mockImplementation();
      const consoleLogSpy2 = jest.spyOn(console, "log").mockImplementation();

      const inputArray = ["Red", "Green", "White", "Black"];
      const expectedOutput = "Red,Green,White,Black";
      const expectedOutput1 = "Red,Green,White,Black";
      const expectedOutput2 = "RedGreenWhiteBlack";

      const result = concatenation(inputArray);
      // Assert that console.log was called with the expected output
      expect(consoleLogSpy).toHaveBeenCalledWith(expectedOutput);
      expect(consoleLogSpy1).toHaveBeenCalledWith(expectedOutput1);
      expect(consoleLogSpy2).toHaveBeenCalledWith(expectedOutput2);

      // Restore the original implementation of console.log
      consoleLogSpy.mockRestore();
      consoleLogSpy1.mockRestore();
      consoleLogSpy2.mockRestore();
})

test("We suppose to get the chunk of an array", () => {
    expect(chunk([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
})