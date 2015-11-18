describe("add herbivore animal ", function() {
    var cat = new Tiger("cat",5,7,8);
    it("has name = ", function() {
        expect(cat.getName()).toEqual("cat")
    });
    it("size = ", function() {
        expect(cat.getSize()).toEqual(5)
    });
    it("givingTongueFrequency = ", function() {
        expect(cat.getGivingTongueFrequency()).toEqual(7)
    });
    it("feedingFrequency = ", function() {
        expect(cat.getFeedingFrequency()).toEqual(8)
    });
    it("has voice = ", function() {
        expect(cat.getVoice()).toEqual("Grrrr")
    });

});
