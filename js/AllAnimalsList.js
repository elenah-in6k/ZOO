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
    var table = document.createElement('table');
    var items = options.items || [];
    var list;
    list = document.createElement("tr");
    var listElement = document.createElement("td");
    listElement.textContent = " Name ";
    list.appendChild(listElement);
     listElement = document.createElement("td");
    listElement.textContent =  " Type ";
    list.appendChild(listElement);
    listElement = document.createElement("td");
   listElement.textContent =  " Size ";
   list.appendChild(listElement);
      table.appendChild( list );
  items.getAllAnimals().forEach ( function (item) {
    list = document.createElement("tr");
    var listElement = document.createElement("td");
    listElement.textContent = items.getAnimalKind(item) + " " + item.getName();
    list.appendChild(listElement);
     listElement = document.createElement("td");
    listElement.textContent = " " +  item.getAnimalType();
    list.appendChild(listElement);
    listElement = document.createElement("td");
   listElement.textContent =  " " + item.getSize();
   list.appendChild(listElement);
      table.appendChild( list );
  });
  output.appendChild( table );

}


this.getOutput = getOutput;


};
