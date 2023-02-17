import("./ClickableAdvertisement.css");

export default function ClickableAdvertisement({ images }) {
  return (
    <ul className="clickable-advertisement">
      {images.map((image, index) => {
        return (
          <li key={index}>
            <img className="image-link" src={image} />
          </li>
        );
      })}
    </ul>
  );
}
