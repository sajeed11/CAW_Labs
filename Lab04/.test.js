const exf = require("./echo");
test("exf", () => { 
    expect(exf("echo", 1)).toBe("echo");
})