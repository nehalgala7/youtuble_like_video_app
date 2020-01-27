import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import { SearchBar} from "./components";
// import Main from "./Main.js";
import SearchResult from "./pages/SearchResult";
import DetailView from "./pages/DetailView";
import "./App.css";


class App extends Component {
	state = {
		videos: null,
		selectedVideo: null
	};

	handleSearch = (searchQuery) => {
		console.log("handleSearch")
		this.setState({
			redirectPath: "/result?query=" + searchQuery
		});
	}
  
  render() {
	  console.log(this.state.redirectPath ,"redirectPath");
      return (
			<div className="main-container">
				<SearchBar onSubmit={this.handleSearch.bind(this)} />
				<Switch>
					<Route exact path='/result' render={(props) => (
                        <SearchResult exact {...props}/>
                    )} />
					<Route exact path='/watch' render={(props) => (
						<DetailView {...props}
						/>
					)} />
				</Switch>
				
		</div> 
    );
  }
}

export default App;