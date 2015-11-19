function Squirrel(name,givingTongueFrequency, feedingFrequency){
  var size = 2;
  Herbivore.call(this, name, size, givingTongueFrequency, feedingFrequency);
  this.voice = "Phhhh";
  var self = this;

}
