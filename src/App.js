import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor () {
        super()
        this.state = {
            username: ''
        }
        this.handleClick = this.handleClick.bind(this)
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div class="widget">
                        <p>
                            Pay it Forward, Coffee Style
                        </p>
                        <button type="submit" onClick={this.handleClick}>Give</button>
                    </div>
                </header>
            </div>
        );
    }

    handleClick () {
        console.log('Success!')
    }
}



export default App;
