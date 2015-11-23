function Zoo() {
  var animals = [];
  var birds = [];
  var deers = [];
  var elephants = [];
  var hares = [];
  var monkeys = [];
  var squirrels = [];
  var bears = [];
  var foxes = [];
  var raccoons = [];
  var serpents = [];
  var tigers = [];
  var herbivore = [];
  var predacious = [];

  this.addAnimal = function (typeName, name, givingTongueFrequency, feedingFrequency) {
   var newAnimal = new typeName(name, givingTongueFrequency, feedingFrequency);
   animals.push(newAnimal);
   getAllAnimalsOfKind();
  };

  function getAllAnimals () {
    getAllAnimalsOfKind();
    return animals;
  };

  this.getAllAnimals = getAllAnimals;

  this.getAnimal = function (i) {
    return animals[i];
  };

  function killAnimal (animal) {
    for (var i = 0; i < animals.length; i++) {
      if ( animals[i] == animal ) {
        animals.splice(i, 1);
        clearInterval(animal.getGivingTongueFrequency());
        clearInterval(animal.getFeedingFrequency());
      }
    }
    getAllAnimals();
  };

  this.killAnimal =  killAnimal ;

  this.ifHungry = function (animal) {
    var message = "";
    var animalType = animal.getAnimalType();
    if (animalType == "Herbivore") {
      killAnimal(animal);
      message = " died.";
    } else if (animalType == "Predacious") {
      if(herbivore.length != 0) {
        message = eatAnimal(animal, herbivore);
      } else if (predacious.length > 1) {
        message = eatAnimal(animal, predacious);
      } else {
        killAnimal(animal);
        message = " died.";
      }
    }
    return message;
  }

function eatAnimal(animal, animals) {
  var j = 0;
  for (var i = 0; (i < animals.length) & (j < 1); i++) {
    if ( animals[i].getSize() < animal.getSize()) {
      killAnimal(animals[i]);
      return  " : I  ate " + getAnimalKind(animals[i]) + " " + animals[i].getName();
      j++;
    }
  }
  if (j == 0) {
    killAnimal(animal);
    return  " died.";
  }

}
  this.eatAnimal = eatAnimal;
  function getAllAnimalsOfKind () {
     birds = [];
     deers = [];
     elephants = [];
     hares = [];
     monkeys = [];
     squirrels = [];
     bears = [];
     foxes = [];
     raccoons = [];
     serpents = [];
     tigers = [];
     herbivore = [];
     predacious = [];
     animals.forEach( function (item) {
       if (item instanceof Bird){
         birds.push(item);
       } else if (item instanceof Deer ) {
         deers.push(item);
       } else if (item instanceof Elephant) {
         elephants.push(item);
       } else if (item instanceof Hare) {
         hares.push(item);
       } else if (item instanceof Monkey) {
         monkeys.push(item);
       } else if (item instanceof Squirrel) {
         squirrels.push(item);
       } else if (item instanceof Bear) {
         bears.push(item);
       } else if (item instanceof Fox) {
         foxes.push(item);
       } else if (item instanceof Raccoon) {
         raccoons.push(item);
       } else if (item instanceof SerpentGorynych) {
         serpents.push(item);
       } else if (item instanceof Tiger) {
         tigers.push(item);
       }
     });
     herbivore = herbivore.concat(birds,deers, elephants, monkeys, squirrels, hares);
     predacious = predacious.concat( bears,  foxes, raccoons, serpents, tigers) ;
   }
  function getAllAnimalsOfKind1 (kind) {
    var allAnimalsOfKind;
     animals.forEach( function (item, kind) {
       if (item instanceof kind) {
         allAnimalsOfKind.push(item);
       }
     });}
  function getAnimalKind (animal) {
    if (animal instanceof Bird){
      return "Bird";
    } else if (animal instanceof Deer ) {
      return "Deer";
    } else if (animal instanceof Elephant) {
      return "Elephant";
    } else if (animal instanceof Hare) {
      return "Hare";
    } else if (animal instanceof Monkey) {
      return "Monkey";
    } else if (animal instanceof Squirrel) {
      return "Squirrel";
    } else if (animal instanceof Bear) {
      return "Bear";
    } else if (animal instanceof Fox) {
      return "Fox";
    } else if (animal instanceof Raccoon) {
      return "Raccoon";
    } else if (animal instanceof SerpentGorynych) {
      return "SerpentGorynych";
    } else if (animal instanceof Tiger) {
      return "Tiger";
    }
  }

  this.getAnimalKind = getAnimalKind;

  this.getAllHerbivore = function () {
        return herbivore ;}
  this.getAllPredacious = function () {
        return predacious ;}
  this.getAllBirds = function () {
    return birds ;}
  this.getAllDeers = function () {
    return deers;}
  this.getAllElephants = function () {
    return elephants;}
  this.getAllHares = function () {
    return hares;}
  this.getAllMonkeys = function () {
    return monkeys;}
  this.getAllSquirrels = function () {
    return squirrels;}
  this.getAllBears = function () {
    return bears;}
  this.getAllFoxes = function () {
    return foxes;}
  this.getAllRaccoons = function () {
    return raccoons;}
  this.getAllSerpents = function () {
    return serpents;}
  this.getAllTigers = function () {
    return tigers;}
};
