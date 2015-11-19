describe("add predacious animal ", function() {
    var bear = new Bear("bear",7,8);
    it("has name = ", function() {
        expect(bear.getName()).toEqual("bear")
    });
    it("has size = ", function() {
        expect(bear.getSize()).toEqual(18)
    });
    it("has givingTongueFrequency = ", function() {
        expect(bear.getGivingTongueFrequency()).toEqual(7)
    });
    it("has feedingFrequency = ", function() {
        expect(bear.getFeedingFrequency()).toEqual(8)
    });
    it("has voice = ", function() {
        expect(bear.getVoice()).toEqual("Wrraa-wraa")
    });

});
