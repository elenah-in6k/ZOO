function ZooCages(allZooAnimal) {
    var cages;
    var div;

    function getCages() {
        if (!cages) createDOM();
        return cages;
    }

    function createDOM() {
        cages = document.createElement('div');
        cages.className = "cage";
        var herbivore = document.createElement('div');
        herbivore.className = "herbivore";
        var titleElem = document.createElement('span');
        herbivore.appendChild(titleElem);
        titleElem.className = "title";
        titleElem.textContent = "HERBIVORE";
        div = document.createElement('div');
        allZooAnimal.getHerbivoreKindsNameList().forEach(function(kind) {
            createCage(new kind("", 0, 0).getAnimalKind("str"), allZooAnimal.getAllAnimalsOfKind1(kind));
        });
        herbivore.appendChild(div);
        cages.appendChild(herbivore);
        var predacious = document.createElement('div');
        predacious.className = "predacious";
        var titleElem = document.createElement('span');
        predacious.appendChild(titleElem);
        titleElem.className = "title";
        titleElem.textContent = "PREDACIOUS";
        div = document.createElement('div');
        allZooAnimal.getPredaciousKindsNameList().forEach(function(kind) {
            createCage(new kind("", 0, 0).getAnimalKind("str"), allZooAnimal.getAllAnimalsOfKind1(kind));
        });
        predacious.appendChild(div);
        cages.appendChild(predacious);
    }

    function createCage(nameKind, kindAnimals) {
        if (kindAnimals.length != 0) {
            var cage = document.createElement('div');
            cage.className = nameKind;
            cage = createCageDOM({
                title: nameKind,
                items: kindAnimals
            });
            div.appendChild(cage);
        }
    }

    function createCageDOM(options) {
        var animalsList = new AnimalList({
            title: options.title,
            items: options.items,
            animalDao: allZooAnimal
        });
        return animalsList.getOutput();
    }

    function deleteDOM() {
        while (cages.lastChild) {
            cages.removeChild(cages.lastChild);
        }
    }
    this.deleteDOM = deleteDOM;
    this.getCages = getCages;
}