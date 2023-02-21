const sortProductsByProperty = (array, property, sortValue, saveValue) => {
  if (sortValue === "asc") {
    array.sort((a, b) => {
      return a[property] - b[property];
    });
  } else if (sortValue === "desc") {
    array.sort((a, b) => {
      return b[property] - a[property];
    });
  }

  return saveValue([...array]);
};

export { sortProductsByProperty };
