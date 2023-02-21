import("./Shop.css");
import("../../assets/global.css");
import { useEffect, useState, useRef } from "react";
import shop1 from "../../assets/shop1.png";
import shop2 from "../../assets/shop2.png";
import shop3 from "../../assets/shop3.png";

import SearchBar from "./components/SearchBar/SearchBar";
import ProductList from "./components/ProductList/ProductList";
import ClickableAdvertisement from "./components/ClickableAdvertisement/ClickableAdvertisement";
import { productData } from "../../assets/productData";
import { ProductFilterBar, ProductPageNumberBar } from "./components/Bars/Bars";
import { sortProductsByProperty } from "../../utils/manipulateArrays";

export default function Shop() {
  const [products, setProducts] = useState(productData);
  const [pageNumber, setPageNumber] = useState(1);

  // Change page number
  const changePageNumber = (num) => {
    setPageNumber(num);
  };

  const section1 = useRef();

  function scrollTo(section) {
    section.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="shop-container">
      <div ref={section1}>
        <SearchBar />
      </div>
      <ClickableAdvertisement
        data={[
          { image: shop1, href: "./delivery" },
          { image: shop2, href: "./sale" },
          { image: shop3, href: "./limited" },
          { image: shop2, href: "./sale" },
        ]}
      />
      <ProductFilterBar products={products} setProducts={setProducts} />
      <ProductList products={products} pageNumber={pageNumber} />
      <ProductPageNumberBar
        scrollTo={scrollTo}
        scrollRef={section1}
        arrayLength={products.length}
        changePageNumber={changePageNumber}
      />
    </div>
  );
}
