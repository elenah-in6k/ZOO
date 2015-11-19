function Elephant(name,givingTongueFrequency, feedingFrequency){
  var size = 25;
  Herbivore.call(this, name, size, givingTongueFrequency, feedingFrequency);
  this.voice = "Uuuiiiiiiiiiiii";
  var self = this;

}
