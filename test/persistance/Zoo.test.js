describe("add new animal in zoo ", function() {
var animals = new Zoo();
animals.addAnimal(Tiger, "vasia", 8, 9);
var allAnimals = animals.getAllAnimals();
var a = allAnimals[0];
  it("has animal = ", function() {
      expect(a.getName()).toEqual("vasia");
  });
});

describe("delete animal in zoo ", function() {
var newAnimals = new Zoo();
newAnimals.addAnimal(Tiger, "vasia", 8, 9);
newAnimals.addAnimal(Tiger, "John", 8, 9);
newAnimals.addAnimal(Tiger, "John", 8, 9);
 newAnimals.killAnimal(newAnimals.getAnimal(1));
 it("has animals  = ", function() {
     expect(newAnimals.getAllAnimals().length).toEqual(2);
 });
  });

describe("eat some animal ", function() {
var zooAnimals = new Zoo();
zooAnimals.addAnimal(Tiger, "vasia", 8, 9);
zooAnimals.addAnimal(Tiger, "John", 8, 9);
zooAnimals.addAnimal(Bird, "Ti", 8, 9);
zooAnimals.addAnimal(Hare, "QQ", 8, 9);
zooAnimals.addAnimal(Elephant, "Jo", 8, 9);
zooAnimals.getAllAnimals();
zooAnimals.eatAnimal(zooAnimals.getAnimal(0), zooAnimals.getAllHerbivore());
it("has animals  = ", function() {
    expect(zooAnimals.getAllAnimals().length).toEqual(4);
});
});
describe("if animal hungry ", function() {
var aanimals = new Zoo();
aanimals.addAnimal(Tiger, "vasia", 8, 9);
aanimals.addAnimal(Tiger, "John", 8, 9);
aanimals.addAnimal(Bird, "Ti", 8, 9);
aanimals.addAnimal(Hare, "QQ", 8, 9);
aanimals.addAnimal(Elephant, "Jo", 8, 9);
aanimals.getAllAnimals();
it("has predacious  = ", function() {
    expect(aanimals.getAllPredacious().length).toEqual(2);
});
it("has Herbivore  = ", function() {
    expect(aanimals.getAllHerbivore().length).toEqual(3);
});
it("has Herbivore in array  = ", function() {
    expect(aanimals.getAllHerbivore().length != 0).toEqual(true);
});
it("has herbivore after Tiger eat = ", function() {
  aanimals.ifHungry(aanimals.getAnimal(0));// Tiger eat
    expect(aanimals.getAllHerbivore().length).toEqual(2);
});
});

describe("predacious zoo  ", function() {
var predaciousZoo = new Zoo();
predaciousZoo.addAnimal(Tiger, "vasia", 8, 9);
predaciousZoo.addAnimal(Tiger, "John", 8, 9);
predaciousZoo.addAnimal(Bear, "Ti", 8, 9);
predaciousZoo.addAnimal(Raccoon, "QQ", 8, 9);
predaciousZoo.addAnimal(Fox, "Jo", 8, 9);
predaciousZoo.getAllAnimals();
it("has predacious  = ", function() {
    expect(predaciousZoo.getAllPredacious().length).toEqual(5);
});
it("has Herbivore  = ", function() {
    expect(predaciousZoo.getAllHerbivore().length).toEqual(0);
});
it("Bear hungry = ", function() {
  predaciousZoo.getAllAnimals().forEach( function (item){
    if(predaciousZoo.getAnimalKind(item) == "Bear")
    {
      predaciousZoo.ifHungry(item);
    }
  });
  predaciousZoo.getAllAnimals().forEach( function (item){
    if(predaciousZoo.getAnimalKind(item) == "Bear")
    {
      predaciousZoo.ifHungry(item);
    }
  });
  predaciousZoo.getAllAnimals().forEach( function (item){
    if(predaciousZoo.getAnimalKind(item) == "Bear")
    {
      predaciousZoo.ifHungry(item);
    }
  });
  predaciousZoo.getAllAnimals().forEach( function (item){
    if(predaciousZoo.getAnimalKind(item) == "Bear")
    {
      predaciousZoo.ifHungry(item);
    }
  });
    expect(predaciousZoo.getAllAnimals().length).toEqual(1);
});

it("has predacious after all hungry = ", function() {
  predaciousZoo.getAllAnimals().forEach( function (item){
    predaciousZoo.ifHungry(item);
  })
    expect(predaciousZoo.getAllAnimals().length).toEqual(0);
});
});
