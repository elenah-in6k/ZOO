describe("add predacious animal ", function() {
    var racoon = new Racoon("racoon",7,8);
    it("has name = ", function() {
        expect(racoon.getName()).toEqual("racoon")
    });
    it("has size = ", function() {
        expect(racoon.getSize()).toEqual(4)
    });
    it("has givingTongueFrequency = ", function() {
        expect(racoon.getGivingTongueFrequency()).toEqual(7)
    });
    it("has feedingFrequency = ", function() {
        expect(racoon.getFeedingFrequency()).toEqual(8)
    });
    it("has voice = ", function() {
        expect(racoon.getVoice()).toEqual("Pufff")
    });

});
