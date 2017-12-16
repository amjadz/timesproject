import React, { Component } from 'react';

class TimeSearch extends Component {
    render() {
        return (

            <form  onSubmit={(e) => this.handleFormSubmit(e)}>
                <ul>
                    <div className = "col-xs-3">
                    <input className="form-control" type="text" id="lookUp" placeholder="Search by City" ref="SearchBox" />
                    </div>
                    <button className = "btn btn-primary" type="submit" id="searchButton">Search</button>
                </ul>
            </form>
        );
    }

    handleFormSubmit(e) {
        e.preventDefault();
        var item = this.refs.SearchBox.value;
        this.props.handleFormSubmit(item);
    }


}

export default TimeSearch;