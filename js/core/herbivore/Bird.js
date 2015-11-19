function Bird(name,givingTongueFrequency, feedingFrequency){
  var size = 1;
  Herbivore.call(this, name, size, givingTongueFrequency, feedingFrequency);
  this.voice = "Tweet-tweet";
  var self = this;

}
