function Deer(name,givingTongueFrequency, feedingFrequency){
  var size = 13;
  Herbivore.call(this, name, size, givingTongueFrequency, feedingFrequency);
  this.voice = "Uphh";
  var self = this;

  // function getAnimalKind(type) {
  //   if (type == "str") {
  //     return "Deer";
  //   }else {
  //     return Deer;
  //   }
  // }
}
