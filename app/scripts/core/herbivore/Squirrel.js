function Squirrel(name,givingTongueFrequency, feedingFrequency){
  var size = 2;
  Herbivore.call(this, name, size, givingTongueFrequency, feedingFrequency);
  this.voice = "Phhhh";
  var self = this;
  function getAnimalKind(type) {
    if (type == "str") {
      return "Squirrel";
    }else {
      return Squirrel;
    }
  }
  this.getAnimalKind = getAnimalKind;

}
