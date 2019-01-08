import Options from './Options';
import React from 'react';
import logo from "../media/logo.png";

export default class Home extends React.Component{
    constructor () {
        super()
        this.state = {
            submitted : false
        }

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(formSubmitEvent) {
        this.setState({
            submitted : true
        });
    }



    render() {
        if(this.state.submitted === true){
            return(
                <Options />
            );
        }
        else{
            return (
                <div className="home" id="home">
                        <form id="homeForm" onSubmit={this.handleFormSubmit}>
                            <img className="logo" src={logo} alt={"logo"}/>
                            <button className="button" type="submit">Give</button>
                        </form>
                </div>
            );
        }

    }
}