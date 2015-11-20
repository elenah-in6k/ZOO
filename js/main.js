
document.addEventListener("DOMContentLoaded", function(event) {
     var animalController = new AnimalController();
     var  allZooAnimal = animalController.getZooAnimals();
     var animalsList = new AllAnimalsList({
       title: "Animals",
       items: allZooAnimal
     });
     var animalChat = new AnimalChat({
       title: "AnimalChat",
       items: allZooAnimal
     });

     document.body.appendChild(animalsList.getOutput());
     document.body.appendChild(animalChat.getOutput());

     allZooAnimal.getAllAnimals().forEach ( function (item) {
       giveTongue(item);
     });

     function giveTongue(animal){
       animal.setGivingTongueFrequency(setInterval(function() {
             animalChat.newShout(animal);
           }, animal.getGivingTongueFrequency() * 800));
       }
});
