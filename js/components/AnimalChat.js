function AnimalChat(options) {
  var output;
  var chat;

  function getOutput() {
    if (!output) createDOM();
   return output;
  }

  function createDOM () {
    output = document.createElement('div');
    output.className = "animalChat";

    var titleElem = document.createElement('span');
    output.appendChild(titleElem);
    titleElem.className = "title";
    titleElem.textContent = options.title;

    chat = document.createElement("div");
    chat.className = "chat";
    output.appendChild(chat);
  }

  function giveVoice(animal) {
    chat.innerHTML += options.chatingAnimal.getAnimalKind(animal) + " " +
    animal.getName() + " : " + animal.getVoice() + "<br>";
  }

  function feedTime(animal) {
    for (var i = 0; i <  options.chatingAnimal.getAllAnimals().length; i++) {
      if (  options.chatingAnimal.getAllAnimals()[i] == animal ) {
    chat.innerHTML += options.chatingAnimal.getAnimalKind(animal) + " " +
    animal.getName() + " : I want eat. Feed me!!!" + "<br>";
      }
    }
  }

  function killTime(animal, message) {
    chat.innerHTML += options.chatingAnimal.getAnimalKind(animal) + " " +
     animal.getName() + message + "<br>";
  }

  this.killTime = killTime;
  this.feedTime = feedTime;
  this.newShout = giveVoice;
  this.getOutput = getOutput;
}
