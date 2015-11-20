function AnimalController(){

  var animals = new AnimalDao();
  this.getZooAnimals = function () {
    fillAnimals();
    return animals;
  }

  function fillAnimals(){
  animals.addAnimal(Tiger, "Ben", 5, 9);
  animals.addAnimal(Tiger, "John", 4, 9);

  animals.addAnimal(Squirrel, "Layla", 1, 9);
  animals.addAnimal(Monkey, "Anfisa", 2, 9);
  animals.addAnimal(Fox, "Alisa", 7, 9);
  animals.addAnimal(Elephant, "Jack", 8, 9);
  animals.addAnimal(Bear, "Bob", 3, 9);
  animals.addAnimal(Raccoon, "Jimmy", 7, 9);
}


}
