function Predacious(name, size, givingTongueFrequency, feedingFrequency){
  Animal.call(this, name, size, givingTongueFrequency, feedingFrequency);
  this.getAnimalType = function() {
    return "Predacious";
  }
}
