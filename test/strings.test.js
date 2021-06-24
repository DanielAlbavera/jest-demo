describe("Strings", () => {
    test("there is no 'I' in 'team'", () => {
        expect("team").not.toMatch(/I/);
    });

    test("But there is a 'stop' in 'Cristopher'", () => {
        expect("Christopher").toMatch(/stop/);
    });
});

describe("Email validation", () => {
    const test_email = "dalbavera@hotmail.com";
    const wrong_email = "I'm not an email";
    const email_regexp = /\S+@\S+.\S/;
    
    it("'dalbavera@hotmail.com' is a valid email", () => {        
        expect(test_email).toMatch(email_regexp);
    });

    it("'I'm not an email' is not a valid email", ()=> {
        expect(wrong_email).not.toMatch(email_regexp);
    });

});