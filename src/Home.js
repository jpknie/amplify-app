import React from 'react';
import './Home.css';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(<div className="Home"> Hello home! </div>);
    }
}