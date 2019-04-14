import React, { Component } from 'react';
import InputForm from './InputForm';
import './App.css';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/form" component={InputForm} />
                </Switch>
            </main>
        );
    }
}

export default App;
