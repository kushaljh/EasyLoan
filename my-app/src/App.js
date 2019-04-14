import React, { Component } from 'react';
import InputForm from './InputForm';
import './App.css';
import * as V from 'victory';
import LineChart from './VisualEngine';

class App extends Component {
    render() {
        return (
            <div>
                <InputForm />
                <LineChart />
            </div> 
        );
    }
}

export default App;
