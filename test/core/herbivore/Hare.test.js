
describe("Hare", function() {
    var hare = new Hare("hare",7,8);
    it("has name", function() {
        expect(hare.getName()).toEqual("hare")
    });
    it("has size ", function() {
        expect(hare.getSize()).toEqual(3)
    });
    it("has giving tongue frequency", function() {
        expect(hare.getGivingTongueFrequency()).toEqual(7)
    });
    it("has feeding frequency", function() {
        expect(hare.getFeedingFrequency()).toEqual(8)
    });
    it("has voice", function() {
        expect(hare.getVoice()).toEqual("khhrum-hrum")
    });

});
