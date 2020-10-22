import item from './item.js';

let items = [];
let hideCheckedItems = false

function findById(id) {
    return items.find(item => {
        return item.id == id;
    });
}

function addItem(name) {
    try {
        item.validateName(name);
        items.push(item.create(name));
    } catch(error) {
        console.log(error);
    }
}

function findAndToggleChecked(id) {
    this.findById(id).checked = true;
}

function findAndUpdateName(id, newName) {
    try {
        item.validateName(newName);
        this.findById(id).name = newName;
    } catch(error) {
        console.log(error);
    }
}

function findAndDelete(id) {
    items.splice(items.findIndex(el => el.id == id), 1);
}

export default {
    items,
    hideCheckedItems,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
}
