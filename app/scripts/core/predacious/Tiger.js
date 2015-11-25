function Tiger(name,givingTongueFrequency, feedingFrequency){
  var size = 15;
  Predacious.call(this, name, size, givingTongueFrequency, feedingFrequency);
  this.voice = "Arrrr";
  var self = this;
  function getAnimalKind(type) {
    if (type == "str") {
      return "Tiger";
    }else {
      return Tiger;
    }
  }
  this.getAnimalKind = getAnimalKind;

}
