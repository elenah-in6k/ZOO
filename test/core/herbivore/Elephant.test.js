describe("Elephant", function() {
    var elephant = new Elephant("elephant",7,8);
    it("has name", function() {
        expect(elephant.getName()).toEqual("elephant")
    });
    it("has size ", function() {
        expect(elephant.getSize()).toEqual(25)
    });
    it("has giving tongue frequency", function() {
        expect(elephant.getGivingTongueFrequency()).toEqual(7)
    });
    it("has feedingFrequency = ", function() {
        expect(elephant.getFeedingFrequency()).toEqual(8)
    });
    it("has voice = ", function() {
        expect(elephant.getVoice()).toEqual("Uuuiiiiiiiiiiii")
    });

});
