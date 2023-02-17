import("./ClickableAdvertisement.css");

export default function ClickableAdvertisement({ images }) {
  return (
    <ul className="clickable-advertisement">
      {images.map((image) => {
        return (
          <li>
            <img className="image-link" src={image} />
          </li>
        );
      })}
    </ul>
  );
}
