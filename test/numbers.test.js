describe("Numbers", () => {
    test("Tests common numbers matchers", () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);

    // toBe and toEqual are equivalet for numbers

    expect(value).toBe(4);
    expect(value).toEqual(4);
    });
});

describe("Floats", () => {
    test("adding floating point numbers", () => {
        const value = 0.1 + 0.2;
        //expect(value).toBe(0.3) this won't work vecause of rounding
        expect(value).toBeCloseTo(0.3); // this works

    });

});