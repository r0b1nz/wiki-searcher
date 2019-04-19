import React, { Component } from 'react';

/**
 * Return array of divs containing Search results 
 * @param {*} props 
 */
const SearchViews = props => {
    if (props.titles || props.descriptions) {
        return props.titles.map((title, index) => { 
            return(
                <div id={index}>
                    <h1>{title}</h1>
                    {/* Description doesn't exists sometimes */}
                    {props.descriptions[index] && <p>{props.descriptions[index]}</p>}
                </div>
            );
        })
    }
    return ""
        
}

/**
 * Component responsible for loading the results of the search query
 */
class EagleView extends Component {
    render() {
        const { titles, descriptions } = this.props;

        return(
            <div className="MotherOfAllSearchViews">
                <SearchViews titles={titles} descriptions={descriptions}/ >
            </div>
        );
    }
}

export default EagleView