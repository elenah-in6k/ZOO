function Animal(name, size, givingTongueFrequency, feedingFrequency){
  this.name = name,
  this.size = size,
  this.givingTongueFrequency = givingTongueFrequency,
  this.feedingFrequency = feedingFrequency,
  this.voice;
  var self = this;
  this.giveTongue = function () {
    return self.voice;
  };
  this.getName = function getName(){
    return self.name;
  };
  this.getSize = function () {
   return self.size;
  };
  this.getGivingTongueFrequency = function () {
   return self.givingTongueFrequency;
  };
  this.setGivingTongueFrequency = function (time) {
    return self.givingTongueFrequency = time;
  };
  this.getFeedingFrequency = function () {
   return self.feedingFrequency;
  };
  this.setFeedingFrequency = function (time) {
   return self.feedingFrequency = time;
  };
  this.getVoice = function () {
   return self.voice;
 };

}
