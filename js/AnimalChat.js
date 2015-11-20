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

    chat.innerHTML += options.items.getAnimalKind(animal) + " " + animal.getName() + " : " + animal.getVoice() + "<br>";
  }

  this.newShout = giveVoice;
  this.getOutput = getOutput;
}
