const getItemFromLocalStorage = (key) => {
  return localStorage.getItem(key);
};

const setItemToLocalStorage = (key, value) => {
  return localStorage.setItem(key, value);
};

const removeItemFromLocalStorage = (key) => {
  return localStorage.removeItem(key);
};

export {
  getItemFromLocalStorage,
  setItemToLocalStorage,
  removeItemFromLocalStorage,
};
