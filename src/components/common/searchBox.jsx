import React from "react";
import { Input } from "../styleComponents/home";
import PropTypes from "prop-types";

const SearchBox = ({ value, onChange }) => {
  return (
    <Input
      type="text"
      name="query"
      placeholder="Search..."
      value={value}
      onChange={(e) => onChange(e.currentTarget.value)}
    />
  );
};

SearchBox.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default SearchBox;
