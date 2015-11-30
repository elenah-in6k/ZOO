describe("Bird", function() {
    var bird = new Bird("bird",7,8);
    it("has name", function() {
        expect(bird.getName()).toEqual("bird")
    });
    it("has size", function() {
        expect(bird.getSize()).toEqual(1)
    });
    it("has giving tongue frequency", function() {
        expect(bird.getGivingTongueFrequency()).toEqual(7)
    });
    it("has feeding frequency", function() {
        expect(bird.getFeedingFrequency()).toEqual(8)
    });
    it("has voice", function() {
        expect(bird.getVoice()).toEqual("Tweet-tweet")
    });
});
