describe("add predacious animal ", function() {
    var serpentGorynych = new SerpentGorynych("serpentGorynych",7,8);
    it("has name = ", function() {
        expect(serpentGorynych.getName()).toEqual("serpentGorynych")
    });
    it("has size = ", function() {
        expect(serpentGorynych.getSize()).toEqual(30)
    });
    it("has givingTongueFrequency = ", function() {
        expect(serpentGorynych.getGivingTongueFrequency()).toEqual(7)
    });
    it("has feedingFrequency = ", function() {
        expect(serpentGorynych.getFeedingFrequency()).toEqual(8)
    });
    it("has voice = ", function() {
        expect(serpentGorynych.getVoice()).toEqual("Aaaaarrrrr-Ffrrrrrrrr")
    });

});
