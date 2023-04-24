import React, { useState, useEffect } from "react";
import Select from "react-select";

interface IProps {
  value?: { value: string; label: string }[] | [];
  onChange: any;
  options: { value: string; label: string }[];
  // fullwidth: any;
  // required: any;
}

const MultipleSelect = ({ onChange, value, options }: IProps) => {
  const [state, setState] = useState(value);

  useEffect(() => {
    if (state?.length) return;
    setState(value);
  }, [value]);

  const handleChange = (selectedOption: any) => {
    setState(selectedOption);
    onChange(selectedOption.map((item: any) => item.value));
  };

  return (
    <Select
      placeholder="Маршруты"
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          minHeight: "56px",
          marginTop: "10px",
          maxWidth: "450px",
        }),
      }}
      {...onChange}
      isMulti={true}
      value={state}
      onChange={handleChange}
      options={options as any}
    />
  );
};

export default MultipleSelect;
