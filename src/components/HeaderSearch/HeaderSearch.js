import React from "react";
import "./HeaderSearch.css";
import SearchIcon from "@mui/icons-material/Search";

const HeaderSearch = () => {
  return (
    <div className="headerSearch">
      <input
        type="text"
        placeholder="Search Amazon"
        className="headerSearch__input"
      />
      <div className="headerSearch__icon">
        <SearchIcon />
      </div>
    </div>
  );
};

export default HeaderSearch;
