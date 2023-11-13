const exf = require("./echo");
const notation = require("./notation");

test("exf", () => { 
    expect(exf("echo", 1)).toBe("echo");
})

test("notation", () => { 
    expect(notation([10, 20, 30])).toBe(20);
})