import("./Shop.css");
import("../../assets/global.css");
import { useEffect, useState } from "react";
import ScrollableItemList from "./components/ScrollableItemList/ScrollableItemList";

export default function Shop({ setIsShopping }) {
  useEffect(() => {
    console.log("Shopping");
    setIsShopping(true);

    return () => {
      console.log("Stopping shopping");
      setIsShopping(false);
    };
  }, []);
  return (
    <div className="shop">
      <ScrollableItemList />
    </div>
  );
}
