describe("add animal ", function() {
    var cat = new Animal("cat",5,7,8);
    it("name = ", function() {
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

});
