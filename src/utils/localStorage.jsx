const getItemFromLocalStorage = (item) => {
  return localStorage.getItem(item);
};

const setItemToLocalStorage = (name, data) => {
  return localStorage.setItem(name, data);
};

export { getItemFromLocalStorage, setItemToLocalStorage };
