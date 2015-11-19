describe("add new animal in zoo ", function() {
var animals = new AnimalDao();
animals.addAnimal(Tiger, "vasia", 8, 9);
var allAnimals = animals.getAllAnimals();
var a = allAnimals[0];
  it("has animal = ", function() {
      expect(a.getName()).toEqual("vasia");
  });


});
