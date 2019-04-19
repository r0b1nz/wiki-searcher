import React, { Component } from 'react';
import SearchBar from './SearchBar';
import EagleView from './EagleView';
import { setResult } from './Utils/wikiDao';
import './App.css';

class App extends Component {
  state = {
    searchKeyword: "",
    searchResults: []
  }

  updateSearchKeyword = newVal => {
    setResult(newVal, this.updateResults);
    this.setState({
      searchKeyword: newVal
    })
  }

  updateResults = searchResults => {
    this.setState({
      ...this.state,
      searchResults
    })
  }

  render() {
    // return - Search Bar & Search View
    return(
            <div className="App" >
              <div className="Header">
                <h1>Wiki - Searcher</h1>
                <SearchBar updateSearchKeyword={this.updateSearchKeyword} />
              </div>
              <EagleView titles={this.state.searchResults[1]}
                  descriptions={this.state.searchResults[2]} />
              <div className="Footer">
                <h3>Designed and developed by <b>Robin Gautam</b></h3>
              </div>
            </div>
    );

  }
}

export default App