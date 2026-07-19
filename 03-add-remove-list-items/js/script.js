// Add and Remove List Items - your JavaScript goes here.
//
// Available elements:
//   #itemInput     - the text input
//   #addItemBtn    - the add button
//   #errorMessage  - the validation message
//   #itemList      - the list container
//   #emptyState    - the empty list message

// Grab the elements using any selector: #id, .class, button, etc.

const getEl = (selector) => document.querySelector(selector);

// Add Item

let items = JSON.parse(localStorage.getItem('Items')) || [];

// Empty State

if(items.length > 0){
    getEl('#emptyState').hidden = true;
}

items.forEach(displayListItems);

// Event listeners to attach and perform actions

function addItem(){
    const inputItem = getEl("#itemInput").value.trim();
    if(!inputItem) {
        getEl('#errorMessage').textContent = 'Please enter an item before adding.';
        getEl('#errorMessage').hidden = false;
        return;
    }
    else if(inputItem.length < 2) {
        getEl('#errorMessage').textContent = 'Item must be at least 2 characters long';
        getEl('#errorMessage').hidden = false;
        return;
    }
    else if(items.includes(inputItem)){
        getEl('#errorMessage').textContent = 'Duplicate items are not allowed';
        getEl('#errorMessage').hidden = false;
        return;
    }
    else{
        getEl('#errorMessage').hidden = true;
        items.push(inputItem);
        getEl("#itemInput").value = "";
        if(items.length > 0){
           getEl('#emptyState').hidden = true;
        }
        displayListItems(inputItem);
    }
    // SetItem to local storage
    localStorage.setItem('Items', JSON.stringify(items));
}

getEl("#addItemBtn").addEventListener('click', addItem);

getEl("#itemInput").addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        addItem();
    }
});

// Display Items to DOM

function displayListItems (item) {
    const li = document.createElement('li');
    li.className = 'list-item';
    const span = document.createElement('span');
    span.textContent = item;
    const button = document.createElement('button');
    button.className = 'delete-btn';
    button.type = 'button';
    button.setAttribute('aria-label', 'Delete item');
    button.textContent = '×';
    li.append(span, button);
    const ul = getEl("#itemList");
    ul.append(li);    
}

// Remove Item

function removeItem(){
    getEl('#itemList').addEventListener('click', function(event){
        const deleteItem = event.target.closest('button');
        if(!deleteItem) return;

        const li = deleteItem.closest('li');
        const index = Array.from(getEl('#itemList').querySelectorAll('.list-item')).indexOf(li);

        items.splice(index, 1);
        li.remove();

        if(items.length === 0){
            getEl('#emptyState').hidden = false;
        }

        localStorage.setItem('Items', JSON.stringify(items));
    });
}

removeItem();