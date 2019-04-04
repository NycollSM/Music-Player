(function(){
    //dialog
    function newSong (){
        const importSong = document.getElementById('import');
        importSong.addEventListener('click', addItem);
    } newSong();
    function addItem (event) {
        let dialog = document.createElement('dialog');
        let header = document.createElement('header');
        let form = document.createElement('form');
        let footer = document.createElement('footer');

        header.innerText = 'Add Item';

        let fieldBtn = document.createElement('button');
        fieldBtn.innerText = 'Add';
        let field = createInput({
            name: 'custom',
            placeholder: 'Add Field'
        });
        field.appendChild(fieldBtn);
        fieldBtn.addEventListener('click', addField);

        let name = createInput({
            name: 'name',
            placeholder: 'Name',
        });
        let price = createInput({
            name: 'price',
            type: 'number',
            placeholder: 'Price'
        });
        let dateValue = `${new Date().getFullYear()}/${new Date().getMonth()+1}/${new Date().getDate()}`;
        let date = createInput({
            name: 'date',
            type: 'date',
            placeholder: 'Date',
            value: dateValue
        });

        form.name = 'itemForm';
        form.appendChild(name);
        form.appendChild(price);
        form.appendChild(date);

        let cancelBtn = document.createElement('button');
        cancelBtn.innerText = 'Cancel';
        cancelBtn.addEventListener('click', cancel);
        cancelBtn.classList.add('cancel');

        let saveBtn = document.createElement('button');
        saveBtn.innerText = 'Save';
        saveBtn.addEventListener('click', save);

        footer.appendChild(cancelBtn);
        footer.appendChild(saveBtn);

        dialog.appendChild(header);
        dialog.appendChild(field);
        dialog.appendChild(form);
        dialog.appendChild(footer);

        document.body.appendChild(dialog);
        // dialog.open = true;
        dialog.showModal();

        function cancel () {
            console.log('cancel');
            // dialog.open = false;
            dialog.close();
            document.body.removeChild(dialog);
        }

        function save () {
            let data = {};
            let input = null;

            for (let i = 0; i < form.length; i++) {
                input = form[i];
                if(input.name) data[input.name] = input.value;
            }
            inventory.push(data);
            // dialog.open = false;
            dialog.close();

            renderTable();
        }

        function addField () {
            console.log('add field');
            let fieldName = field.querySelector('input').value;
            if(!fieldName) return false;
            let input = createInput({
                name: fieldName,
                placeholder: fieldName,
                remove: () => form.removeChild(input),
            });
            form.appendChild(input);
        }
    }
})();