const getItemFromLocalStorage = (key) => {
  return localStorage.getItem(key);
};

const setItemToLocalStorage = (key, value) => {
  return localStorage.setItem(key, value);
};

export { getItemFromLocalStorage, setItemToLocalStorage };
