/* eslint-disable import/no-webpack-loader-syntax */
import React, { Component } from 'react';
import InputForm from './InputForm';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Offers from './Offers';
// Load the favicon, the manifest.json file and the .htaccess file
/* eslint-disable import/no-unresolved, import/extensions */
import '!file-loader?name=[name].[ext]!./imgs/new_cc.png';
import '!file-loader?name=[name].[ext]!./imgs/wallet.png';
import '!file-loader?name=[name].[ext]!./imgs/enticing.png';

class App extends Component {
    render() {
        return (
            <div>
                <img src="/new_cc.png" style = {{ height: 220, width: 400 }}/>
                <br/>
                <img src="/wallet.png" style = {{ height: 200, width: 400 }}/>
                <div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/form" component={InputForm} />
                        <Route path="/offers" component={Offers} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
