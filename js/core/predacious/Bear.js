function Bear(name,givingTongueFrequency, feedingFrequency){
  var size = 18;
  Predacious.call(this, name, size, givingTongueFrequency, feedingFrequency);
  this.voice = "Wrraa-wraa";
  var self = this;
  function getAnimalKind(type) {
    if (type == "str") {
      return "Bear";
    }else {
      return Bear;
    }
  }
  this.getAnimalKind = getAnimalKind;

}
