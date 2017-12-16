import React, { Component } from 'react';

class CurrentDate extends Component {
    render() {
        return (
            <div id= "times">
                <h1 id="date">Date:{this.props.readable}</h1>
            </div>
        );
    }
}

export default CurrentDate;