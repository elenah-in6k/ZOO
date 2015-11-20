function AnimalDao() {
  var animals = [];
  this.addAnimal = function (typeName, name, givingTongueFrequency, feedingFrequency) {
     var newAnimal = new typeName(name, givingTongueFrequency, feedingFrequency);
    animals.push(newAnimal);
  };
  this.getAllAnimals = function () {
    return animals;
  };
  this.killAnimal = function (i) {
    animals.splice(i, 1);
  };

  this.getAnimalKind = function (animal){
    if (animal instanceof Bird){
      return "Bird";
    } else if (animal instanceof Deer ) {
      return "Deer";
    } else if (animal instanceof Elephant) {
      return "Elephant";
    } else if (animal instanceof Hare) {
      return "Hare";
    } else if (animal instanceof Monkey) {
      return "Monkey";
    } else if (animal instanceof Squirrel) {
      return "Squirrel";
    } else if (animal instanceof Bear) {
      return "Bear";
    } else if (animal instanceof Fox) {
      return "Fox";
    } else if (animal instanceof Raccoon) {
      return "Raccoon";
    } else if (animal instanceof SerpentGorynych) {
      return "SerpentGorynych";
    } else if (animal instanceof Tiger) {
      return "Tiger";
    }
  };
};
