import("./ProductListBars.css");

const ProductFilterBar = ({ sortByItemRating }) => {
  return (
    <div className="product-filter-bar">
      <p>sort by</p>
      <button
        className="product-list-filter-bar-button"
        onClick={() => {
          sortByItemRating();
        }}
      >
        Rating
      </button>
    </div>
  );
};

const PageNumbersBar = ({ arrayLength, changePageNumber }) => {
  const pageButtons = document.getElementsByClassName(
    "product-list-page-button"
  );

  const toggleCurrentPage = (e, pageButtons) => {
    for (let i = 0; i < pageButtons.length; i++) {
      if (pageButtons[i].id === e.target.id) {
        pageButtons[i].classList.add("current-page");
      } else {
        pageButtons[i].classList.remove("current-page");
      }
    }
  };

  return (
    <div className="product-list-page-bar">
      {Array.from({ length: arrayLength }).map((_, index) => {
        if (index % 10 === 0) {
          return (
            <button
              className="product-list-page-button"
              key={index}
              id={index / 10 + 1}
              onClick={(e) => {
                changePageNumber(e) + toggleCurrentPage(e, pageButtons);
              }}
            >
              {index / 10 + 1}
            </button>
          );
        }
      })}
    </div>
  );
};

export { ProductFilterBar, PageNumbersBar };
