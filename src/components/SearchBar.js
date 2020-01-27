import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
    state = {
      searchTerm: ""
    }

    handleChange = (event) => {
      this.setState({
        searchTerm: event.target.value
      });
    }

    onKeyPress = (event) => {
      if (event.key === "Enter") {
        this.props.onSubmit(this.state.searchTerm);
      }
    }

    render() {
      return (
        <div className="search-bar-container">
          <input 
            className="search-bar"
            placeholder="Search..."
            value={this.state.searchTerm}
            onChange={this.handleChange}
            onKeyPress={this.onKeyPress}
          />
        </div>
      );
    }
}

export default SearchBar;
