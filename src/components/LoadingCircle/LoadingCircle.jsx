import("./LoadingCircle.css");

const LoadingCircle = ({
  size,
  borderWidth,
  color,
  barColor,
  animationTime,
}) => {
  if (!size) size = "10px";
  if (!borderWidth) borderWidth = "10px";
  if (!color) color = "black";
  if (!barColor) barColor = "rgb(68, 166, 223)";
  if (!animationTime) animationTime = "1s";

  document.documentElement.style.setProperty("--size", size);
  document.documentElement.style.setProperty("--borderWidth", borderWidth);
  document.documentElement.style.setProperty("--color", color);
  document.documentElement.style.setProperty("--barColor", barColor);
  document.documentElement.style.setProperty("--animationTime", animationTime);

  return <div className="loading-circle"></div>;
};

export { LoadingCircle };
