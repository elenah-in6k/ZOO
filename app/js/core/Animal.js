function Animal(name, size, givingTongueFrequency, feedingFrequency) {
    this.name = name,
        this.size = size,
        this.givingTongueFrequency = givingTongueFrequency,
        this.feedingFrequency = feedingFrequency,
        this.voice;
    this._voiceTimer;
    this._feedTimer;
    this._killTimer;
    this._observers = [];
    var self = this;
    this.giveTongue = function() {
        return self.voice;
    };
    this.getName = function getName() {
        return self.name;
    };
    this.getSize = function() {
        return self.size;
    };
    this.getGivingTongueFrequency = function() {
        return self.givingTongueFrequency;
    };
    this.setGivingTongueFrequency = function(time) {
        return self.givingTongueFrequency = time;
    };
    this.getFeedingFrequency = function() {
        return self.feedingFrequency;
    };
    this.setFeedingFrequency = function(time) {
        return self.feedingFrequency = time;
    };
    this.getVoice = function() {
        return self.voice;
    };
    this.startVoiceTimer = function() {
        if (self._voiceTimer) self.stopVoiceTimer();
        self._voiceTimer = setInterval(function() {
            self.makeVoice();
        }, self.getGivingTongueFrequency() * 1000);
        return self._voiceTimer;
    };
    this.startFeedTimer = function() {
        if (self._feedTimer) self.stopVoiceTimer();
        self._feedTimer = self.setFeedingFrequency(feedTimer = setInterval(function() {
            func(animal);
        }, self.getFeedingFrequency() * 950));
        return self._feedTimer;
    };
    this.stopVoiceTimer = function() {
        if (this._voiceTimer) {
            clearInterval(this._voiceTimer);
        }
    };
    this.stopFeedTimer = function() {
        if (this._feedTimer) {
            clearInterval(this._feedTimer);
        }
    };
    this.addObserver = function(observer) {
        self._observers.push(observer);
    };
    this.notifyObservers = function(type, message) {
      self._observers.forEach(function(o) {
        o.update(self, type, message);
      });
    };
    this.makeVoice = function() {
        self.notifyObservers(Animal.notifyTypes.voice, this.getVoice());
    };
}
Animal.notifyTypes = {
    voice: 0,
    kill: 1,
    hungry: 2,
};