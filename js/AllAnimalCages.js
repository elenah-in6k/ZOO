function AllAnimalCages (allZooAnimal) {
  var cages;
  var div;

  function getCages() {
    if (!cages) createDOM();
      return  cages;
  }

  function createDOM () {
    cages = document.createElement('div');
    cages.className = "cage";
    var herbivore = document.createElement('div');
    herbivore.className = "herbivore";
    var titleElem = document.createElement('span');
    herbivore.appendChild(titleElem);
    titleElem.className = "title";
    titleElem.textContent = "HERBIVORE";
    div = document.createElement('div');
    createCage("Birds", allZooAnimal.getAllBirds());
    createCage("Deers", allZooAnimal.getAllDeers());
    createCage("Monkeys", allZooAnimal.getAllMonkeys());
    createCage("Elephants", allZooAnimal.getAllElephants ());
    createCage("Hares", allZooAnimal.getAllHares ());
    createCage("Squirrels", allZooAnimal.getAllSquirrels ());
    herbivore.appendChild(div);
    cages.appendChild(herbivore);
    var predacious = document.createElement('div');
    predacious.className = "predacious";
    var titleElem = document.createElement('span');
    predacious.appendChild(titleElem);
    titleElem.className = "title";
    titleElem.textContent = "PREDACIOUS";
    div = document.createElement('div');
    createCage("Bears", allZooAnimal.getAllBears ());
    createCage("Foxes", allZooAnimal.getAllFoxes ());
    createCage("Raccoons", allZooAnimal.getAllRaccoons ());
    createCage("Serpents", allZooAnimal.getAllSerpents ());
    createCage("Tigers", allZooAnimal.getAllTigers());
    predacious.appendChild(div);
    cages.appendChild(predacious);

  }
  function createCage(nameKind, kindAnimals){
    if (kindAnimals.length != 0 ){
      var  cage = document.createElement('div');
      cage.className = nameKind;
      cage =  createCageDOM({
        title: nameKind,
        items: kindAnimals
      });
      div.appendChild(cage);
    }
  }
  function createCageDOM (options) {
    var animalsList = new AnimalList({
      title: options.title,
      items: options.items,
      animalDao: allZooAnimal
    });
    return animalsList.getOutput();
  }
  this.getCages = getCages;
}
