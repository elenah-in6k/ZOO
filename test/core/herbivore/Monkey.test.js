describe("add herbivore animal ", function() {
    var monkey = new Monkey("monkey",7,8);
    it("has name = ", function() {
        expect(monkey.getName()).toEqual("monkey")
    });
    it("has size = ", function() {
        expect(monkey.getSize()).toEqual(5)
    });
    it("has givingTongueFrequency = ", function() {
        expect(monkey.getGivingTongueFrequency()).toEqual(7)
    });
    it("has feedingFrequency = ", function() {
        expect(monkey.getFeedingFrequency()).toEqual(8)
    });
    it("has voice = ", function() {
        expect(monkey.getVoice()).toEqual("Aookikiii")
    });

});
