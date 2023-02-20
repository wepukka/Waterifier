import("./ProductListBars.css");
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

const ProductFilterBar = ({ sortProductsByProperty }) => {
  return (
    <div className="product-filter-bar">
      <div className="product-filter-bar-container">
        <p>rating</p>
        <button
          onClick={() => {
            sortProductsByProperty("rating", "desc");
          }}
        >
          <ArrowCircleUpIcon />
        </button>
        <button
          onClick={() => {
            sortProductsByProperty("rating", "asc");
          }}
        >
          <ArrowCircleDownIcon />
        </button>
      </div>
      <div className="product-filter-bar-container">
        <p>price</p>
        <button
          onClick={() => {
            sortProductsByProperty("price", "desc");
          }}
        >
          <ArrowCircleUpIcon />
        </button>
        <button
          onClick={() => {
            sortProductsByProperty("price", "asc");
          }}
        >
          <ArrowCircleDownIcon />
        </button>
      </div>
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
