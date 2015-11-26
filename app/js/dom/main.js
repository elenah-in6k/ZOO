
document.addEventListener("DOMContentLoaded", function(event) {
var feedTimer ;
var animalController = new AnimalFiller();
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


  allZooAnimal.giveTongue(chatGiveVoice);
  allZooAnimal.feedTime(chatFeedTime);
  allZooAnimal.killTime(chatKillTime);

  function beforeKill(){
    allCages.deleteDOM();
  }

  function afterKill(){
    allCages = new ZooCages(allZooAnimal);
    document.body.appendChild(allCages.getCages());
  }

  function chatGiveVoice(animal){
    animalChat.giveVoice(animal);
  }

  function chatFeedTime(animal){
    animalChat.feedTime(animal);
  }

  function chatKillTime(hurryAnimal, str){
    animalChat.killTime(hurryAnimal, str, beforeKill, afterKill);
  }

});
