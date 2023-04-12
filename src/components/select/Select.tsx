import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

interface IOption {
  name: string;
  value: string;
}

interface IProps {
  options: IOption[];
  label: string;
  defaultValue: string;
  onChange: (v: string) => void;
  styles: any;
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
          native
          id={`grouped-native-select ${label}`}
          label="Grouping"
          defaultValue={defaultValue}
          onChange={(e) => onChange(e.target.value)}
        >
          <optgroup>
            {options.map((option, i) => (
              <option key={option.name} value={i}>
                {option.name}
              </option>
            ))}
          </optgroup>
        </Select>
      </FormControl>
    </div>
  );
}
