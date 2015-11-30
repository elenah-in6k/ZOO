describe("Deer ", function() {
    var deer = new Deer("deer",7,8);
    it("has name = ", function() {
        expect(deer.getName()).toEqual("deer")
    });
    it("has size = ", function() {
        expect(deer.getSize()).toEqual(13)
    });
    it("has giving tongue frequency = ", function() {
        expect(deer.getGivingTongueFrequency()).toEqual(7)
    });
    it("has feedingFrequency = ", function() {
        expect(deer.getFeedingFrequency()).toEqual(8)
    });
    it("has voice = ", function() {
        expect(deer.getVoice()).toEqual("Uphh")
    });

});
