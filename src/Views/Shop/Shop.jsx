import("./Shop.css");
import("../../assets/global.css");
import shop1 from "../../assets/shop1.png";
import shop2 from "../../assets/shop2.png";
import shop3 from "../../assets/shop3.png";

import SearchBar from "./components/SearchBar/SearchBar";
import ProductList from "./components/ScrollableItemList/ProductList";
import ClickableAdvertisement from "./components/ClickableAdvertisement/ClickableAdvertisement";

export default function Shop() {
  return (
    <div className="shop-container">
      <SearchBar />
      <ClickableAdvertisement
        data={[
          { image: shop1, href: "./delivery" },
          { image: shop2, href: "./sale" },
          { image: shop3, href: "./limited" },
          { image: shop2, href: "./sale" },
        ]}
      />
      <ProductList />
    </div>
  );
}
