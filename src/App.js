import React, { Component } from 'react';
import './App.css';
import CurrentTime from './CurrentTime.jsx';
import TimeSearch from './TimeSearch.jsx';

var STORAGE_KEY = 'todoList';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cities: []
        };
    }

    handleFormSubmit(item) {
        var url = 'http://api.aladhan.com/timingsByCity?city='+ item +'&country=US&method=2';
          fetch(url)
            .then((response) => {
                return response.json();

            })
            .then((json) => {
                this.setState({
                    Date: json.data.date.readable,
                    Fajr: json.data.timings.Fajr,
                    Sunrise: json.data.timings.Sunrise,
                    Dhuhr: json.data.timings.Dhuhr,
                    Asr: json.data.timings.Asr,
                    Maghrib: json.data.timings.Maghrib,
                    Isha: json.data.timings.Isha
                    
                });
            })
            .catch((error) => {
                window.alert("Enter a real city please!");
                this.setState({
                    name: null,
                    temp: null,
                    short: null,
                    long: null,
                    icon: null
                });
            });

    }
    componentDidMount() {
        var savedListSting = localStorage.getItem(STORAGE_KEY);
        var savedListArray = JSON.parse(savedListSting) || [];


        this.setState({
            cities: savedListArray


        });

        this.handleFormSubmit('Seattle');

    }


    render() {
        return (
            <div className = "App">
              <header id ="headerImage">
                </header>
                <div className="moveText">
                <h1>Welcome to Prayer Times!</h1>
                <h6>Search any city in the US!</h6>
                </div>

                <TimeSearch
                  handleFormSubmit={(item) => {
                      this.handleFormSubmit(item);
                    }}
                    />

                <CurrentTime
                  Fajr={this.state.Fajr}
                  Sunrise={this.state.Sunrise}
                  Dhuhr={this.state.Dhuhr}
                  Asr={this.state.Asr}
                  Maghrib={this.state.Maghrib}
                  Isha={this.state.Isha}
                />

            </div>
        );
    }
}

export default App;