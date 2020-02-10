import React from 'react';
import Calendar from 'react-calendar';

import './RecordingView.css';

export default class RecordingView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="RecordingView">
                <div className="CalendarFilter">
                    <span className="CalendarHeader">Filter by date</span>
                    <Calendar />
                </div>
            </div>
        );
    }
}