function Raccoon(name,givingTongueFrequency, feedingFrequency){
  var size = 4;
  Predacious.call(this, name, size, givingTongueFrequency, feedingFrequency);
  this.voice = "Pufff";
  var self = this;
  function getAnimalKind(type) {
    if (type == "str") {
      return "Raccoon";
    }else {
      return Raccoon;
    }
  }
  this.getAnimalKind = getAnimalKind;

}
