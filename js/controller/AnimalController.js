function AnimalController(){
  var animals = new AnimalDao();
  this.getZooAnimals = function () {
    var zooAnimals = [];
    allAnimals.forEach(function(item,i){
      zooAnimals.push("name: " + item.getName() + "voice: " + item.getVoice())
    })
    return zooAnimals;
  }
  animals.addAnimal(Tiger, "Ben", 8, 9);
  animals.addAnimal(Tiger, "John", 8, 9);

  animals.addAnimal(Squirrel, "Layla", 8, 9);
  animals.addAnimal(Monkey, "Anfisa", 8, 9);
  animals.addAnimal(Fox, "Alisa", 8, 9);
  animals.addAnimal(Elephant, "Jack", 8, 9);
  animals.addAnimal(Bear, "Bob", 8, 9);
  animals.addAnimal(Raccoon, "Jimmy", 8, 9);
  var allAnimals = animals.getAllAnimals();

}
