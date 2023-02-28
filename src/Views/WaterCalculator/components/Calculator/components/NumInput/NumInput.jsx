import("./NumInput.css");
import { useEffect } from "react";

const NumInput = (props) => {
  const { value, setValue, id } = props;

  useEffect(() => {
    console.log(props);
  }, [props]);

  return (
    <input
      id={id}
      className="num-input"
      type="number"
      min={0}
      max={500}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export { NumInput };
