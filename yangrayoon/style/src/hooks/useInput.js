import { useState } from "react";

const useInput = (initialState) => {
  const [value, setValue] = useState(initialState);

  const onChange = (e) => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange,
  };
};
export default useInput;
