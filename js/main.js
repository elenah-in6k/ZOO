
document.addEventListener("DOMContentLoaded", function(event) {
var feedTimer ;
var animalController = new AnimalController();
var  allZooAnimal = animalController.getZooAnimals();

var animalChat = new AnimalChat({
  title: "AnimalChat",
  chatingAnimal: allZooAnimal
});
var allCages = new ZooCages(allZooAnimal);
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
function feedTime (animal) {
   animal.setFeedingFrequency(feedTimer = setInterval(function() {
        animalChat.feedTime(animal);
      }, animal.getFeedingFrequency() * 950));
    }

function killTime(animal){
        animal.setFeedingFrequency(setInterval(function() {
        allCages.deleteDOM();
        var hurryAnimal = animal;

      var str = allZooAnimal.ifHungry(animal);
        animalChat.killTime(hurryAnimal, str);
        allCages = new ZooCages(allZooAnimal);
        document.body.appendChild(allCages.getCages());
      }, animal.getFeedingFrequency() * 1000 ));
    }

});
