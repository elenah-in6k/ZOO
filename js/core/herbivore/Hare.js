function Hare(name,givingTongueFrequency, feedingFrequency){
  var size = 3;
  Herbivore.call(this, name, size, givingTongueFrequency, feedingFrequency);
  this.voice = "khhrum-hrum";
  var self = this;

  function getAnimalKind(type) {
    if (type == "str") {
      return "Hare";
    }else {
      return Hare;
    }
  }
  this.getAnimalKind = getAnimalKind;


}
