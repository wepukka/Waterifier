const sortProductsByProperty = async (
  array,
  property,
  sortValue,
  saveValue
) => {
  try {
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
  } catch (error) {
    console.log(error);
  }
};

export { sortProductsByProperty };
