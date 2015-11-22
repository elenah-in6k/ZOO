describe("add new animal in zoo ", function() {
var animals = new AnimalDao();
animals.addAnimal(Tiger, "vasia", 8, 9);
var allAnimals = animals.getAllAnimals();
var a = allAnimals[0];
  it("has animal = ", function() {
      expect(a.getName()).toEqual("vasia");
  });
});

describe("delete animal in zoo ", function() {
var animals = new AnimalDao();
animals.addAnimal(Tiger, "vasia", 8, 9);
animals.addAnimal(Tiger, "John", 8, 9);
animals.addAnimal(Tiger, "John", 8, 9);
animals.killAnimal(animals.getAnimal[1]);
 allAnimals = animals.getAllAnimals();
  it("has animal = ", function() {
      expect(allAnimals.length).toEqual(2);
  });
});
