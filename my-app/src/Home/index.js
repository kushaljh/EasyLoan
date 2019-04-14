/* eslint-disable import/no-webpack-loader-syntax */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

class Home extends Component {
    render() {
        return (
            <div className="homepage">
                <img src="/enticing.png" style = {{ height: 400, width: 350 }}/>
                <Link to='/form'>
                    <button type="button" className="interest">Interested? Learn More</button>
                </Link>
            </div>
        );
    }
}

export default Home;
