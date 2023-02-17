import("./Shop.css");
import("../../assets/global.css");
import shop1 from "../../assets/shop1.png";
import shop2 from "../../assets/shop2.png";
import shop3 from "../../assets/shop3.png";

import SearchBar from "./components/SearchBar/SearchBar";
import ProductList from "./components/ScrollableItemList/ProductList";
import ClickableAdvertisement from "./components/ClickableAdvertisement/ClickableAdvertisement";
import CartButton from "./components/CartButton/CartButton";

export default function Shop() {
  return (
    <div className="shop">
      <div className="shop-container">
        <CartButton /> 
        <SearchBar /> 
        <ClickableAdvertisement images={[shop1, shop2, shop3, shop1, shop2]} />
        <ProductList />
      </div>
    </div>
  );
}
