import React from "react";
import ReactDOM from "react-dom";
import GifList from "./GifList";
import SearchBar from "./SearchBar";
import request from "superagent";
import "./App.css";
// borrowed heavily from: https://tighten.co/blog/react-101-building-a-gif-search-engine
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      gifs: []
    };
  }
  handleTermChange(term) {
    const url = `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=bem29Vcb7S2s6QJV3oGeTVB9FjQZYq8K`;

    request.get(url, (err, res) => {
      this.setState({ gifs: res.body.data });
    });
  }

  render() {
    return (
      <div>
        <h1>Giph-acey</h1>
        <p>(2nd choice was 'Stiphy')</p>
        <div className="searchInput">
          <SearchBar onTermChange={term => this.handleTermChange(term)} />
        </div>
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default App;
