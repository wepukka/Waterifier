const getItemFromLocalStorage = (item) => {
    let itemFound = localStorage.getItem(item);
    return itemFound;
}

const setItemToLocalStorage = (name,data) => {
    return localStorage.setItem(name,data);
}

export {getItemFromLocalStorage,setItemToLocalStorage}