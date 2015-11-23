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
    replica = document.createElement("div");
    replica.textContent = animal.getAnimalKind("str") + " " +
    animal.getName() + " : " + animal.getVoice();
    chat.appendChild(replica);
  }

  function feedTime(animal) {
    for (var i = 0; i <  options.chatingAnimal.getAllAnimals().length; i++) {
      if (  options.chatingAnimal.getAllAnimals()[i] == animal ) {
        replica = document.createElement("div");
        replica.textContent = animal.getAnimalKind("str") + " " +
    animal.getName() + " : I want eat. Feed me!!!";
    chat.appendChild(replica);
      }
    }
  }

  function killTime(animal, message) {
    replica = document.createElement("div");
    replica.textContent = animal.getAnimalKind("str")+ " " +
     animal.getName() + message;
     chat.appendChild(replica);
  }

  this.killTime = killTime;
  this.feedTime = feedTime;
  this.newShout = giveVoice;
  this.getOutput = getOutput;
}
