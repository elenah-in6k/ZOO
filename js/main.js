
document.addEventListener("DOMContentLoaded", function(event) {
  var voiceInterval;
  var feedInterval;
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
       feedTime(item)
     });

     function giveTongue(animal){
      voiceInterval =  animal.setGivingTongueFrequency(setInterval(function() {
             animalChat.newShout(animal);
           }, animal.getGivingTongueFrequency() * 1000));
       }
       function feedTime(animal){
        feedInterval = animal.setFeedingFrequency(setInterval(function() {
               animalChat.feedTime(animal);
             }, animal.getFeedingFrequencyy() * 1000));
         }
});
