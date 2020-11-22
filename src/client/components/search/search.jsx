import React from "react";
import PropTypes from "prop-types";

const Search = ({ setSearch, value }) => {
  return (
    <div className="filters">
      <input
        className="form-control"
        placeholder="Name"
        value={value}
        onChange={(e) => setSearch(e.currentTarget.value)}
      />
    </div>
  );
};

Search.propTypes = {
  value: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};

export default Search;
