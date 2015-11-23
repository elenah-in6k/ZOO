function AnimalController(){

  var animals = new Zoo();
  this.getZooAnimals = function () {
    fillAnimals();
    return animals;
  }

  function fillAnimals(){
  animals.addAnimal(Tiger, "Ben", 5, 8);
  animals.addAnimal(Tiger, "John", 4, 5);

  animals.addAnimal(Squirrel, "Layla", 1, 4);
  animals.addAnimal(Squirrel, "Pippi", 1, 7);
  animals.addAnimal(Monkey, "Anfisa", 2, 5);
  animals.addAnimal(Fox, "Alisa", 7, 9);
  animals.addAnimal(Elephant, "Jack", 8, 4);
  animals.addAnimal(Bear, "Bob", 3, 9);
  animals.addAnimal(Raccoon, "Jimmy", 7, 5);


}


}
