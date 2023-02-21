import("./WaterRating.css");

import BottleFull from "../../assets/bottle_full.png";
import BottleEmpty from "../../assets/bottle_empty.png";

export default function WaterRating({ rating }) {
  // Returns water rating based on given
  let ratingArray = [false, false, false, false, false];

  if (rating > 5) {
    rating = 5;
  }

  for (let i = 0; i < rating; i++) {
    ratingArray[i] = true;
  }

  return (
    <ul className="water-rating">
      <li>
        <img
          className="water-star"
          src={ratingArray[0] ? BottleFull : BottleEmpty}
        />
      </li>
      <li>
        <img
          className="water-star"
          src={ratingArray[1] ? BottleFull : BottleEmpty}
        />
      </li>
      <li>
        <img
          className="water-star"
          src={ratingArray[2] ? BottleFull : BottleEmpty}
        />
      </li>
      <li>
        <img
          className="water-star"
          src={ratingArray[3] ? BottleFull : BottleEmpty}
        />
      </li>
      <li>
        <img
          className="water-star"
          src={ratingArray[4] ? BottleFull : BottleEmpty}
        />
      </li>
    </ul>
  );
}
