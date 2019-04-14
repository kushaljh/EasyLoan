import React, { Component } from 'react';
import InputForm from './InputForm';
import './App.css';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={InputForm} />
                    <Route path="/form" component={InputForm} />
                </Switch>
            </div>
        );
    }
}

export default App;
