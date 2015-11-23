function Elephant(name,givingTongueFrequency, feedingFrequency){
  var size = 25;
  Herbivore.call(this, name, size, givingTongueFrequency, feedingFrequency);
  this.voice = "Uuuiiiiiiiiiiii";
  var self = this;

  function getAnimalKind(type) {
    if (type == "str") {
      return "Elephant";
    }else {
      return Elephant;
    }
  }
  this.getAnimalKind = getAnimalKind;

}
