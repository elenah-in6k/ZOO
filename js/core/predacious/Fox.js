function Fox(name, givingTongueFrequency, feedingFrequency){
  var size = 10;
  Predacious.call(this, name, size, givingTongueFrequency, feedingFrequency);
  this.voice = "Tay-tay";
  var self = this;
  function getAnimalKind(type) {
    if (type == "str") {
      return "Fox";
    }else {
      return Fox;
    }
  }
  this.getAnimalKind = getAnimalKind;

}
