import("./Bars.css");
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import { sortProductsByProperty } from "../../../../utils/manipulateArrays";

const ProductFilterBar = ({ products, setProducts }) => {
  return (
    <div className="product-filter-bar">
      <div className="product-filter-bar-container">
        <p>rating</p>
        <button
          id="rating-desc"
          onClick={() => {
            sortProductsByProperty(products, "rating", "desc", setProducts);
          }}
        >
          <ArrowCircleUpIcon />
        </button>
        <button
          id="rating-asc"
          onClick={() => {
            sortProductsByProperty(products, "rating", "asc", setProducts);
          }}
        >
          <ArrowCircleDownIcon />
        </button>
      </div>
      <div className="product-filter-bar-container">
        <p>price</p>
        <button
          id="price-desc"
          onClick={() => {
            sortProductsByProperty(products, "price", "desc", setProducts);
          }}
        >
          <ArrowCircleUpIcon />
        </button>
        <button
          id="price-asc"
          onClick={() => {
            sortProductsByProperty(products, "price", "asc", setProducts);
          }}
        >
          <ArrowCircleDownIcon />
        </button>
      </div>
    </div>
  );
};

const ProductPageNumberBar = ({
  scrollTo,
  scrollRef,
  arrayLength,
  changePageNumber,
}) => {
  const scrollIntoView = () => {
    scrollTo(scrollRef);
  };

  const handleClick = (e) => {
    changePageNumber(parseInt(e.target.id));
    toggleCurrentPage(e, pageButtons);
    scrollIntoView();
  };
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
                handleClick(e);
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

export { ProductFilterBar, ProductPageNumberBar };
