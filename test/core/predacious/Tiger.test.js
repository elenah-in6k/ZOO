describe("add predacious animal ", function() {
    var tiger = new Tiger("cat",7,8);
    it("has name = ", function() {
        expect(tiger.getName()).toEqual("cat")
    });
    it("has size = ", function() {
        expect(tiger.getSize()).toEqual(15)
    });
    it("has givingTongueFrequency = ", function() {
        expect(tiger.getGivingTongueFrequency()).toEqual(7)
    });
    it("has feedingFrequency = ", function() {
        expect(tiger.getFeedingFrequency()).toEqual(8)
    });
    it("has voice = ", function() {
        expect(tiger.getVoice()).toEqual("Arrrr")
    });

});
