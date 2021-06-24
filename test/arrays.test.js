const { names, lastNames } = require('../src/arrays');

describe("Arrays and Iterables", () => {
    
    test("Array should contain 'Daniel'", () => {        
        expect( names() ).toContain("Daniel");
        expect( new Set( names() ) ).toContain("Alitzel");
    });

    test("lastNames should not be null", () => {
        expect( lastNames() ).not.toBeNull();
    });

});