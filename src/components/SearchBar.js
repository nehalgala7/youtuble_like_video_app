import React, { useState } from "react";
import "./SearchBar.css";

export default (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => setSearchTerm(event.target.value);

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      props.onSubmit(searchTerm);
    }
  }

  return (
    <div className="search-bar-container">
      <input 
        className="search-bar"
        label="Search..."
        value={searchTerm}
        onChange={handleChange}
        onKeyPress={onKeyPress}
      />
    </div>
  );
}
