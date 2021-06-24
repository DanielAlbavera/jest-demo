const sum = require("../src/sum.js");

describe("Testing sum function", () => {
    
    test("1 + 2 = 3", () => {
        expect(sum(1,2)).toBe(3);
    });

    it("should return 3 with 1 and 2", () => {
        expect(sum(1,2)).toBe(3);
    })

    it("should return -1 with , 1 and -1", () => {
        expect(sum(1,-2)).toBe(-1);
    });

    it("should return -3 with -1 and -2", () => {
        expect(sum(-1,-2)).toBe(-3);
    })
});