import("./ClickableAdvertisement.css");
import { useNavigate } from "react-router-dom";

export default function ClickableAdvertisement({ data }) {
  const navigate = useNavigate();

  return (
    <ul className="clickable-advertisement">
      {data.map((data, index) => {
        return (
          <li key={index} onClick={() => navigate(data.href)}>
            <img className="image-link" src={data.image} />
          </li>
        );
      })}
    </ul>
  );
}
