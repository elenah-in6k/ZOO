describe("add herbivore animal ", function() {
    var squirrel = new Squirrel("squirrel",7,8);
    it("has name = ", function() {
        expect(squirrel.getName()).toEqual("squirrel")
    });
    it("has size = ", function() {
        expect(squirrel.getSize()).toEqual(2)
    });
    it("has givingTongueFrequency = ", function() {
        expect(squirrel.getGivingTongueFrequency()).toEqual(7)
    });
    it("has feedingFrequency = ", function() {
        expect(squirrel.getFeedingFrequency()).toEqual(8)
    });
    it("has voice = ", function() {
        expect(squirrel.getVoice()).toEqual("Phhhh")
    });

});
