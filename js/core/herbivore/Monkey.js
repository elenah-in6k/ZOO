function Monkey(name,givingTongueFrequency, feedingFrequency){
  var size = 5;
  Herbivore.call(this, name, size, givingTongueFrequency, feedingFrequency);
  this.voice = "Aookikiii";
  var self = this;

}
