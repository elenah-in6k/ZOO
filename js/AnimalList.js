function AnimalList (options) {
var output;

function getOutput() {
  if (!output) createDOM();
 return output;
}

function createDOM () {
  output = document.createElement('div');
  output.className = options.title;

  var titleElem = document.createElement('span');
  output.appendChild(titleElem);
  titleElem.className = "title";
  titleElem.textContent = options.title;

  createDOMElement();
}

function createDOMElement () {
  var items = options.items || [];
  var list;

    list = document.createElement("ul");
    list.className = "list-group";
    items.forEach ( function (item) {
      var listElement = document.createElement("li");
      listElement.className = "list-group-item list-item";
      listElement.textContent =  item.getName();
      var killBtn = document.createElement("button");
      killBtn.className = "btn btn-kill";
      killBtn.type = "button";
      killBtn.textContent = "Kill";
      killBtn.onclick = function(e) {
        options.animalDao.killAnimal(item);
        clearInterval(item.getGivingTongueFrequency());
        list.removeChild(listElement);
        };

        listElement.appendChild(killBtn);
        list.appendChild(listElement);
      //  table.appendChild( list );

    });
    output.appendChild( list );
  }


this.getOutput = getOutput;


};
