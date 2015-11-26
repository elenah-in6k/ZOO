function AddAnimalForm(allZooAnimal) {
    var form;
    var div;
    var label;

    function getForm() {
        if (!form) createDOM();
        return form;
    }

    function createDOM() {
        form = document.createElement('form');
        form.className = "form-inline";
        div = document.createElement('div');
        div.className = "form-group";
        label = document.createElement('label');
        label.textContent = "Name";
        input = document.createElement('input');
        input.className = "form-control";
        input.type = "text";
        input.id = "idName";
        input.placeholder = "jane";
        div.appendChild(label);
        div.appendChild(input);
        form.appendChild(div);
        div = document.createElement('div');
        div.className = "form-group";
        label = document.createElement('label');
        label.textContent = " givingTongueFrequency ";
        input = document.createElement('input');
        input.className = "form-control";
        input.type = "number";
        input.id = "idGivingTongueFrequency";
        div.appendChild(label);
        div.appendChild(input);
        form.appendChild(div);
        div = document.createElement('div');
        div.className = "form-group";
        label = document.createElement('label');
        label.textContent = " feedingFrequency ";
        input = document.createElement('input');
        input.className = "form-control";
        input.type = "number";
        input.id = "idFeedingFrequency";
        div.appendChild(label);
        div.appendChild(input);
        form.appendChild(div);
        div = document.createElement('div');
        div.className = "form-group";
        label = document.createElement('label');
        label.textContent = " AnimalKind ";
        var select = document.createElement('select');
        select.id = "animalKind";
        select.name = "animalKind";
        var option = document.createElement('option');
        option.value = Tiger;
        option.textContent = " Tiger ";
        select.appendChild(option);
        option = document.createElement('option');
        option.value = Bird;
        option.textContent = " Bird ";
        select.appendChild(option);
        div.appendChild(label);
        div.appendChild(select);
        form.appendChild(div);
        var addBtn = document.createElement("button");
        addBtn.className = "btn btn-default";
        addBtn.type = "submit";
        addBtn.textContent = "Add";
        form.onsubmit = function(e) {
            allZooAnimal.addAnimal(Bear, document.getElementById('idName').value, document.getElementById('idGivingTongueFrequency').value, document.getElementById('idFeedingFrequency').value);
            e.preventDefault();
            return false;
        };
        form.appendChild(addBtn);
    }
    this.getForm = getForm;
}