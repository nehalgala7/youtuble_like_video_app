import React, { Component } from "react";
import "./SearchBar.css";
import { Link } from "react-router-dom";

class SearchBar extends Component {
    state = {
      searchTerm: ""
    }

    handleChange = (event) => {
      this.setState({
        searchTerm: event.target.value
      });
    }

    // onKeyPress = (event) => {
    //   if (event.key === "Enter") {
    //     this.props.onSubmit(this.state.searchTerm);
    //   }
    // }

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
          <Link to={"/result?query=" + this.state.searchTerm}><button>Search</button></Link>
        </div>
      );
    }
}

export default SearchBar;
