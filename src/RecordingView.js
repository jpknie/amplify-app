import React from 'react';
import Calendar from 'react-calendar';
import Recording from './Recording';

import './RecordingView.css';

export default class RecordingView extends React.Component {
    constructor(props) {
        super(props);
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

    render() {
        return(
            <div className="RecordingView">
                <div className="CalendarFilter">
                    <span className="CalendarHeader">Filter by date</span>
                    <Calendar />
                </div>
                <div className="RecordingsContainer">
                    {this.createRecordings()}
                </div>
            </div>
        );
    }
}