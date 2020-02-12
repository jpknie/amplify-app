import React from 'react';
import Calendar from 'react-calendar';
import Recording from './Recording';

import './RecordingView.css';

export default class RecordingView extends React.Component {
    state = {
        date: new Date(),
    }

    constructor(props) {
        super(props);
        this.dayChanged = this.onDayChange.bind(this);
    }

    onDayChange(date) {
        this.setState({ date })
    }

    createRecordings() {
        let recordings = [];
        for(let i = 0; i < 10; i++) {
            recordings.push(
                <Recording />
            )
        }
        return recordings;
    }

    formatDate() {
        let options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };

        return this.state.date.toLocaleDateString('fi-FI', options);
    }

    render() {
        return(
            <div className="RecordingView">
                <div className="CalendarFilter">
                    <span className="CalendarHeader">Filter by date</span>
                    <Calendar onClickDay={this.dayChanged} />
                </div>
                <div className="DateHeader">
                    <span>{this.formatDate()}</span>
                </div>
                <div className="RecordingsContainer">
                    {this.createRecordings()}
                </div>
            </div>
        );
    }
}