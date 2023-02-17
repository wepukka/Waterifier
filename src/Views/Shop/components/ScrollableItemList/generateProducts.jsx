import { features, originCountry, goesWellWith } from "./randomProductData";

// All functions to generate random product data
const randomImageNumber = (maxNum) => {
  let number = Math.floor(Math.random(0) * maxNum) + 1;
  return number;
};

const randomProductText = () => {
  let feature = features[Math.floor(Math.random() * features.length)];
  let country = originCountry[Math.floor(Math.random() * originCountry.length)];

  return feature + " water from " + country;
};

const randomProductPrice = (maxNum) => {
  let number = Math.floor(Math.random() * maxNum) + 1;
  let decimal = Math.floor(Math.random() * 19 + 1) * 5;
  return number + "." + decimal;
};

const randomGoesWellWith = () => {
  let food = goesWellWith[Math.floor(Math.random() * goesWellWith.length)];
  return food;
};

export {
  randomImageNumber,
  randomProductText,
  randomProductPrice,
  randomGoesWellWith,
};
