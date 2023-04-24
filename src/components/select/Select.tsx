import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ChangeHandler } from "react-hook-form";

interface IOption {
  name: string;
  value: string;
}

interface IProps {
  options: IOption[];
  label: string;
  defaultValue: string;
  onChange: any;
  styles: any;
  helperText: any;
  error: any;
}

export default function SelectComponent({
  options,
  styles,
  label,
  defaultValue,
  onChange,
}: IProps) {
  const [value, setValue] = useState(options[2]);

  return (
    <div style={styles}>
      <FormControl>
        <InputLabel htmlFor="grouped-native-select">{label}</InputLabel>
        <Select
          multiple
          native
          id={`grouped-native-select ${label}`}
          label="Grouping"
          defaultValue={defaultValue}
          {...onChange}
        >
          <optgroup>
            {options.map((option, i) => (
              <option key={option.name} value={option.name}>
                {option.name}
              </option>
            ))}
          </optgroup>
        </Select>
      </FormControl>
    </div>
  );
}
