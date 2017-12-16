import React, { Component } from 'react';

class CurrentTime extends Component {
    render() {
        return (
            <div id="times">
                <table width="100"className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Prayer</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Fajr</td>
                            <td>{this.props.Fajr}</td>
                        </tr>
                        <tr>
                            <td>Sunrise</td>
                            <td>{this.props.Sunrise}</td>
                        </tr>

                        <tr>
                            <td>Dhuhr</td>
                            <td>{this.props.Dhuhr}</td>
                        </tr>

                        <tr>
                            <td>Asr</td>
                            <td>{this.props.Asr}</td>
                        </tr>

                        <tr>
                            <td>Maghrib</td>
                            <td>{this.props.Maghrib}</td>
                        </tr>

                        <tr>
                            <td>Isha</td>
                            <td>{this.props.Isha}</td>

                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default CurrentTime;