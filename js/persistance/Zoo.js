function Zoo() {
  var animals = [];
  var kindsNameList = [Bird, Deer, Elephant, Hare, Monkey, Squirrel,
     Bear, Fox, Raccoon, SerpentGorynych, Tiger];
  var herbivoreKindsNameList = [Bird, Deer, Elephant, Hare, Monkey, Squirrel];
  var predaciousKindsNameList = [Bear, Fox, Raccoon, SerpentGorynych, Tiger];

  this.getKindsNameList = function (){
    return kindsNameList;
  };
  this.getHerbivoreKindsNameList = function (){
    return herbivoreKindsNameList;
  };
  this.getPredaciousKindsNameList = function (){
    return predaciousKindsNameList;
  };
  this.addAnimal = function (typeName, name, givingTongueFrequency, feedingFrequency) {
   var newAnimal = new typeName(name, givingTongueFrequency, feedingFrequency);
   animals.push(newAnimal);

  };

  function getAllAnimals () {
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
    var herbivores = getAllAnimalsOfType("Herbivore");
    var predacious = getAllAnimalsOfType("Predacious");
    var animalType = animal.getAnimalType();
    if (animalType == "Herbivore") {
      killAnimal(animal);
      message = " died.";
    } else if (animalType == "Predacious") {
      if(herbivores.length != 0) {
        message = eatAnimal(animal, herbivores);
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
      return  " : I  ate " + animals[i].getAnimalKind("str") + " " + animals[i].getName();
      j++;
    }
  }
  if (j == 0) {
    killAnimal(animal);
    return  " died.";
  }

}
  this.eatAnimal = eatAnimal;

   function getAllAnimalsOfType (type) {
     var allAnimalsOfKind = [];
      animals.forEach( function (item) {
        if ( item.getAnimalType() == type) {
          allAnimalsOfKind.push(item);
        }
      });
      return allAnimalsOfKind;
    }
  this.getAllAnimalsOfType = getAllAnimalsOfType;
  function getAllAnimalsOfKind1 (kind) {
    var allAnimalsOfKind = [];
     animals.forEach( function (item) {
       if (item instanceof kind) {
         allAnimalsOfKind.push(item);
       }
     });
     return allAnimalsOfKind;
   }
   this.getAllAnimalsOfKind1 = getAllAnimalsOfKind1;

};
