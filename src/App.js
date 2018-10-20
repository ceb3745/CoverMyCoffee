import React, { Component } from 'react';
import logo from './logo.svg';
import card from './media/card.png'
import './App.css';
import axios from 'axios'


class App extends Component {

    constructor () {
        super()
        this.state = {
            giftCard : '',
            submit : false,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.showPurchase = this.showPurchase.bind(this);
        this.showMessage = this.showMessage.bind(this);
    }

    handleChange(option){
        this.setState(state => ({
            giftCard: option
        }));

    }

    handleFormSubmit(formSubmitEvent) {
        formSubmitEvent.preventDefault();
        if(this.state.giftCard != ''){
            this.setState(state => ({
                submit: true
            }));
        }
    }

    showPurchase() {
        let isSubmitted;
        if(this.state.giftCard != '' && this.state.submit == true){
            isSubmitted = true;
        }
        else{
            isSubmitted = false;
        }
        if (isSubmitted) {
            let giftCard = this.state.giftCard;
            return <Purchase />;
        }
        return null;
    }

    showMessage() {
        let isSubmitted;
        if(this.state.giftCard != '' && this.state.submit == true){
            isSubmitted = true;
        }
        else{
            isSubmitted = false;
        }
        if (isSubmitted) {
            return <Message />;
        }
        return null;
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div class="home">
                        <div class="inner">
                            <p>
                                Pay it Forward, Coffee Style
                            </p>
                            <div class="button">
                            <a href="#options" type="submit" value="Submit">Give</a>
                            </div>
                        </div>
                    </div>
                    <div id="options" class="options">
                        <div class="innertwo">
                            <form onSubmit={this.handleFormSubmit}>
                                <h1>Pick Your Brand</h1>
                                <div className="vertical-cards">
                                    <div className="horizontal-cards">
                                    <label className="container">
                                        <input type="radio" class="cardIn" checked={this.state.giftCard === 'Amazon'}
                                               onChange={(e) => this.handleChange("Amazon", e)}/>
                                        <div className="checkmark">
                                            <img class="card" src={card} alt={"card"}/>
                                            <p class="card-text">Amazon</p>
                                        </div>
                                    </label>
                                    <label className="container">
                                        <input type="radio" class="cardIn" value="Home Depot"
                                               checked={this.state.giftCard === 'Home Depot'}
                                               onChange={(e) => this.handleChange("Home Depot", e)}/>
                                        <div className="checkmark">
                                            <img className="card" src={card} alt={"card"}/>
                                            <p className="card-text">Home Depot</p>
                                        </div>
                                    </label>
                                    </div>
                                    <div className="horizontal-cards">
                                    <label className="container">
                                        <input type="radio" class="cardIn" checked={this.state.giftCard === 'Target'}
                                               onChange={(e) => this.handleChange("Target", e)}/>
                                        <div className="checkmark">
                                            <img className="card" src={card} alt={"card"}/>
                                            <p class="card-text">Target</p>
                                        </div>
                                    </label>
                                    <label className="container">
                                        <input type="radio" class="cardIn" value="Walmart"
                                               checked={this.state.giftCard === 'Walmart'}
                                               onChange={(e) => this.handleChange("Walmart", e)}/>
                                        <div className="checkmark">
                                            <img className="card" src={card} alt={"card"}/>
                                            <p className="card-text">Walmart</p>
                                        </div>
                                    </label>
                                    </div>
                                </div>
                                <button className="btn btn-default" type="submit">Submit</button>
                            </form>
                            <div className="message">
                                {this.showMessage()}
                            </div>
                        </div>
                    </div>
                    <div className="purchase">
                        {this.showPurchase()}
                    </div>
                </header>
            </div>

        );
    }

}

class Message extends Component{
    render(){
        return(
            <div>
                <p> Scroll Down to Continue... </p>
            </div>
        );
    }
}

class Card extends Component{
    constructor(name){
        super();
        this.state = {
            name : name,
        }
    }

    render(){
        return(
            <label className="container">
                <div className="checkmark">
                    <img className="card" src={card} alt={"card"}/>
                    <p className="card-text">{this.state.name}</p>
                </div>
            </label>
        );
    }
}

class Purchase extends Component {

    constructor(){
        super();
        this.state = {
            brandName: '',
            firstName : '',
            lastName: '',
            amount: '',
            cardNumber: '',
            cvv: '',
            expDateMonth: '',
            expDateYear: '',
            isSubmitted: false,
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleFormSubmit(formSubmitEvent) {
        formSubmitEvent.preventDefault();
        if(this.state.brandName != '' && this.state.firstName != '' && this.state.firstName != '' && this.state.lastName != '' && this.state.amount != '' && this.state.cardNumber != '' && this.state.cvv != '' && this.state.expDateMonth != '' && this.state.expDateYear != ''){
            this.setState(state => ({
                isSubmitted: true
            }));
        }
    }

    render(){
        return(
            <div>
                <div className="App">
                    <header className="App-header">
                        <form onSubmit={this.handleFormSubmit}>
                            <div className="fields">
                                <div className="field">
                                    First Name:
                                    <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange}/>
                                    <br/>
                                </div >
                                <div className="field">
                                    Last Name:
                                    <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange}/>
                                    <br/>
                                </div>
                                <div className="field">
                                    Gift Card Amount:
                                    <input type="text" name="amount" value={this.state.amount} onChange={this.handleChange}/>
                                    <br/>
                                </div>
                                <div className="field">
                                    Card Number:
                                    <input type="text" name="cardNumber" value={this.state.cardNumber} onChange={this.handleChange}/>
                                    <br/>
                                </div>
                                <div className="field">
                                    CVV:
                                    <input type="text" name="cvv" value={this.state.cvv} onChange={this.handleChange}/>
                                    <br/>
                                </div>
                                <div className="field">
                                    Expiration Date:
                                    <input className="expField" type="text" name="cvv" value={this.state.expDateMonth} onChange={this.handleChange}/>
                                    <input className="expField" type="text" name="cvv" value={this.state.expDateYear} onChange={this.handleChange}/>
                                    <br/>
                                </div>
                            </div>
                            <button className="btn btn-default" type="submit">Submit</button>
                        </form>
                    </header>
                </div>
            </div>
        );
    }
}





export default App;
