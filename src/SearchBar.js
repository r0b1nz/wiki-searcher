import React, { Component } from 'react';

/**
 * Search bar for allowing user to search without having a search button
 * Responsible for updating the state of Search Keyword in the App.js 
 */
class SearchBar extends Component {
    state = {
        currentKeyword: ""
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            // equivalent to currentKeyword: value
            [name]: value
        });

        // TODO: Q- Why does the following statement returns previous state property?
        // this.props.updateSearchKeyword(this.state.currentKeyword); 
        this.props.updateSearchKeyword(value);
    }

    render() {
        const { currentKeyword } = this.state;
        return(
            <div className="SearchBar">
                <input type="text" value={currentKeyword} name="currentKeyword" onChange={this.handleChange} />
            </div>
            );
    }
}

export default SearchBar