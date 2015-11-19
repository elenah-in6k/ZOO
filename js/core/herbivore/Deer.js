function Deer(name,givingTongueFrequency, feedingFrequency){
  var size = 13;
  Herbivore.call(this, name, size, givingTongueFrequency, feedingFrequency);
  this.voice = "Uphh";
  var self = this;

}
