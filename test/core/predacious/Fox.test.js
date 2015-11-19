describe("add predacious animal ", function() {
    var fox = new Fox("fox",7,8);
    it("has name = ", function() {
        expect(fox.getName()).toEqual("fox")
    });
    it("has size = ", function() {
        expect(fox.getSize()).toEqual(10)
    });
    it("has givingTongueFrequency = ", function() {
        expect(fox.getGivingTongueFrequency()).toEqual(7)
    });
    it("has feedingFrequency = ", function() {
        expect(fox.getFeedingFrequency()).toEqual(8)
    });
    it("has voice = ", function() {
        expect(fox.getVoice()).toEqual("Tay-tay")
    });

});
