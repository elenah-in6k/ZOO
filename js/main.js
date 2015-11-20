document.addEventListener("DOMContentLoaded", function(event) {
    var animalController = new AnimalController();
    var  allZooAnimal = animalController.getZooAnimals()
    var animalsList = new AllAnimalsList({
      title: "Animals",
      items: allZooAnimals
    });
    var elem = animalsList.getOutput();
    document.body.appendChild(elem);
});
