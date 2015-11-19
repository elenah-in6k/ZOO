function AnimalDao() {
  var animals = [];
  this.addAnimal = function (typeName, name, givingTongueFrequency, feedingFrequency) {
     var newAnimal = new typeName(name, givingTongueFrequency, feedingFrequency);
    animals.push(newAnimal);
  };
  this.getAllAnimals = function () {
    return animals;
  };
  this.killAnimal = function (i){
    animals.splice(i, 1);

  }
};
