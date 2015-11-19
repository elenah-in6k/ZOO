describe("add herbivore animal ", function() {
    var cat = new Herbivore("cat",5,7,8);
    it("has name = ", function() {
        expect(cat.getName()).toEqual("cat")
    });
    it("has size = ", function() {
        expect(cat.getSize()).toEqual(5)
    });
    it("has givingTongueFrequency = ", function() {
        expect(cat.getGivingTongueFrequency()).toEqual(7)
    });
    it("has feedingFrequency = ", function() {
        expect(cat.getFeedingFrequency()).toEqual(8)
    });

});
