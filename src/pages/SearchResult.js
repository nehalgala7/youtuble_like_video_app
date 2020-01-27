import React, {Component} from "react";

import VideoList from "./../components/VideoList";
import youtube from "./../api/youtube";

import "./SearchResult.css";


class SearchResult extends Component {
    state = {
        videos: []
    };

    componentDidMount() {
        let searchQuery = this.getSearchQuery();
        this.search(searchQuery);
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.location.search !== this.props.location.search) {
            let searchQuery = this.getSearchQuery();
            this.search(searchQuery);
        }
    }

    getSearchQuery = () => {
        let query =  (new URL(document.location)).searchParams;
        let searchQuery = query.get("query");
        return searchQuery
    }
 
    search = (searchQuery) => {
        console.log(searchQuery, "test");
        handleSearch.call(this, searchQuery);
    }

    render() {
        return(<div>
            <VideoList videos={this.state.videos} />
        </div>)
    }
}

export default SearchResult;

async function handleSearch(searchTerm) {
	const { data: { items: videos } } = await youtube.get("search", {
		params: {
			part: "snippet",
			maxResults: 5,
			key: process.env.REACT_APP_API_KEY,
			q: searchTerm
		}
	});

	this.setState({
		videos: videos
	});
}