function SerpentGorynych(name,givingTongueFrequency, feedingFrequency){
  var size = 30;
  Predacious.call(this, name, size, givingTongueFrequency, feedingFrequency);
  this.voice = "Aaaaarrrrr-Ffrrrrrrrr";
  var self = this;
  function getAnimalKind(type) {
    if (type == "str") {
      return "SerpentGorynych";
    }else {
      return SerpentGorynych;
    }
  }
  this.getAnimalKind = getAnimalKind;

}
