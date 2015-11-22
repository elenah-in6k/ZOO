
document.addEventListener("DOMContentLoaded", function(event) {
  // var voiceInterval;
  // var feedInterval;
     var animalController = new AnimalController();
     var  allZooAnimal = animalController.getZooAnimals();

     var animalChat = new AnimalChat({
       title: "AnimalChat",
       items: allZooAnimal
     });
    var allCages = new AllAnimalCages(allZooAnimal);
    var addForm = new AddAnimalForm(allZooAnimal);
    document.body.appendChild(addForm.getForm());
     document.body.appendChild(allCages.getCages());
     document.body.appendChild(animalChat.getOutput());

     allZooAnimal.getAllAnimals().forEach ( function (item) {
       giveTongue(item);
       });
     allZooAnimal.getAllAnimals().forEach ( function (item) {
       feedTime(item);
       killTime(item);
     });

     function giveTongue(animal){
     animal.setGivingTongueFrequency(setInterval(function() {
             animalChat.newShout(animal);
           }, animal.getGivingTongueFrequency() * 1000));
       }
      function feedTime(animal){
      animal.setFeedingFrequency(setInterval(function() {
             animalChat.feedTime(animal);
             }, animal.getFeedingFrequency() * 1000));
       }
       function killTime(animal){
       animal.setFeedingFrequency(setInterval(function() {
              animalChat.killTime(animal);
              
            }, animal.getFeedingFrequency() * 1000 + 1500));
        }
});
