import React, { Component } from 'react';
import { createOrder } from './actions/postActions.js';
import Home from './components/Home';
import './App.css';

class App extends Component {
    render(){
        return(
            <Home/>
        );
    }
}

export default App;
