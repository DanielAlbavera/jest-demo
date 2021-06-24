const url = 'https://pokeapi.co/api/v2/pokemon/garchomp';

describe("Testing raw API", async () => {
    it("should print the raw data", done => {
        function callback(data) {
            try {
                const res = await fetch(url);                
                console.log(data);
                done();
            }
            catch (error) {
                done(error);
            }
        }        
        fetch(callback);
    });
});

describe("Testing async API", async () => {
    it("should return 'garchomp' as result", () => {
        //expect(callback.name).toMatch("garchomp");
        console.log(callback);
    });
});