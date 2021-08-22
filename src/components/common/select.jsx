import React from "react";
import { Label, Select, Option, ErrorDiv } from "../styleComponents/login";
import PropTypes from "prop-types";
const SelectInput = ({ name, label, value, options, error, ...rest }) => {
  return (
    <React.Fragment>
      <Label>{label}</Label>
      <Select {...rest} id={name} name={name}>
        {value.id === "new" && (
          <Option value="">{"-- Select Your " + name + " --"}</Option>
        )}
        {value.id !== "new" && name === "state" && (
          <Option value={value[name]}>{value[name]}</Option>
        )}
        {value.id !== "new" && name === "address" && (
          <Option value={value.address_id}>{value[name]}</Option>
        )}
        {options.map((option) => (
          <Option key={option.id} value={option.id}>
            {option.name}
          </Option>
        ))}
      </Select>
      {error && <ErrorDiv>{error}</ErrorDiv>}
    </React.Fragment>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  options: PropTypes.array,
  error: PropTypes.string,
};

export default SelectInput;
