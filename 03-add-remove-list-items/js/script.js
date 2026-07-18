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

const items = [];

// Event listeners to attach and perform actions

getEl("#addItemBtn").addEventListener('click', function(e){
    const inputItem = getEl("#itemInput").value.trim();
    if(!inputItem) {
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
        displayListItems();
    }
    
});

// Add Item to DOM

function displayListItems () {
    const latestItem = items[items.length - 1];
    const li = document.createElement('li');
    li.className = 'list-item';
    const span = document.createElement('span');
    span.textContent = latestItem;
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
    });
}

removeItem();

// Empty State