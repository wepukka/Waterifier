import("./Shop.css");
import("../../assets/global.css");
import { useEffect, useState } from "react";
import ProductList from "./components/ScrollableItemList/ProductList";
import shop1 from "../../assets/shop1.png";
import shop2 from "../../assets/shop2.png";
import shop3 from "../../assets/shop3.png";

export default function Shop() {
  const ClickableAdvertisement = (props) => {
    return <img className={props.className} src={props.src} />;
  };

  return (
    <div className="shop">
      <div className="shop-container">
        <ul>
          <li>
            <ClickableAdvertisement className={"image-link"} src={shop1} />
          </li>
          <li>
            <ClickableAdvertisement className={"image-link"} src={shop2} />
          </li>
          <li>
            <ClickableAdvertisement className={"image-link"} src={shop2} />
          </li>
          <li>
            <ClickableAdvertisement className={"image-link"} src={shop3} />
          </li>
          <li>
            <ClickableAdvertisement className={"image-link"} src={shop3} />
          </li>
        </ul>
        <ProductList />
      </div>
    </div>
  );
}
