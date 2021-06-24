describe("Test common matchers", () => {

    test("To Be -> two plus two is four", () => {
        expect(2 + 2).toBe(4);
    });

    test("To Equal -> Object Assignment", () => {       
        const data = {one: 1};
        data['two'] = 2; 
        expect(data).toEqual({ one: 1, two: 2 });        
    });

    test("Not To Equal", () => {
        data = { one: 1};
        data2 = { two: 2};
        expect(data).not.toEqual(data2)
    });

    test("Not To Equal -> adding possitive numbers is not zero", () => {
        for (let num = 1; num < 11; num++) {
            for (let num2 = 1; num2 < 11; num2++) {
                expect(num + num2).not.toBe(0);
            }
        }
    });
});