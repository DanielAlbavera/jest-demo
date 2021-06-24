describe("Exceptions", () => {
    function compileAndroidCode() {
        throw new Error("you are using the wrong JDK");
    }

    test("compiling android goes as expected", () => {
        expect( () => compileAndroidCode() ).toThrow();
        expect( () => compileAndroidCode() ).toThrow(Error);

        // You also can use the exact error message or a regexp
        expect( () => compileAndroidCode() ).toThrow("you are using the wrong JDK");
        expect( () => compileAndroidCode() ).toThrow(/JDK/);

        /* Note: the function that throws an exception needs to be invoked within a
           wrapping function otherwise the toThrow assertion will fail.
        */
    });

});