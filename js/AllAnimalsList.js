function AllAnimalsList (options) {
var output;

function getOutput() {
  if (!output) createDOM();
 return output;
}

function createDOM () {
  output = document.createElement('div');
  output.className = "animalsList";

  var titleElem = document.createElement('span');
  output.appendChild(titleElem);
  titleElem.className = "title";
  titleElem.textContent = options.title;

  createDOMElement();
}

function createDOMElement () {
  var items = options.items || [];
  var list = document.createElement("ul");
  items.forEach ( function (item) {
    var listElement = document.createElement("li");
    listElement.textContent = item;
    list.appendChild(listElement);
  });
  output.appendChild( list );
}


this.getOutput = getOutput;


};
