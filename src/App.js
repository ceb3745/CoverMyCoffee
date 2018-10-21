import React, { Component } from 'react';
import { createOrder } from './actions/postActions.js';
import card from './media/card.png';
import logo from './media/logo.png';
import './App.css';


class Home extends Component {
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
        if(this.state.giftCard !== ''){
            this.setState(state => ({
                submit: true
            }));
        }
    }

    showPurchase() {
        let isSubmitted;
        if(this.state.giftCard !== '' && this.state.submit === true){
            isSubmitted = true;
        }
        else{
            isSubmitted = false;
        }
        if (isSubmitted) {
            let giftCard = this.state.giftCard;
            return <Purchase brandName={giftCard}/>;
        }
        return null;
    }

    showMessage() {
        let isSubmitted;
        if(this.state.giftCard !== '' && this.state.submit === true){
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
                    <div className="home">
                        <div className="inner">
                            <img className="logo" src={logo} alt={"logo"}/>
                            <div className="button">
                                <a href="#options" type="submit" value="Submit">Give</a>
                            </div>
                        </div>
                    </div>
                    <div id="options" className="options">
                        <div className="innertwo">
                            <form onSubmit={this.handleFormSubmit}>
                                <h1>Pick Your Brand</h1>
                                <div className="vertical-cards">
                                    <div className="horizontal-cards">
                                        <label className="container">
                                            <input type="radio" className="cardIn" checked={this.state.giftCard === 'Amazon'}
                                                   onChange={(e) => this.handleChange("Amazon", e)}/>
                                            <div className="checkmark">
                                                <img className="card" src={card} alt={"card"}/>
                                                <p className="card-text">Amazon</p>
                                            </div>
                                        </label>
                                        <label className="container">
                                            <input type="radio" className="cardIn" value="Home Depot"
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
                                            <input type="radio" className="cardIn" checked={this.state.giftCard === 'Target'}
                                                   onChange={(e) => this.handleChange("Target", e)}/>
                                            <div className="checkmark">
                                                <img className="card" src={card} alt={"card"}/>
                                                <p className="card-text">Target</p>
                                            </div>
                                        </label>
                                        <label className="container">
                                            <input type="radio" className="cardIn" value="Walmart"
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
                </header>
                <div className="purchase">
                    {this.showPurchase()}
                </div>
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

    constructor(props){
        super(props);

        this.state = {
            cardName : this.props.brandName,
        }
    }

    render(){
        return(
            <label className="container">
                <div className="checkmarktwo" >
                    <img className="card" src={card} alt={"card"}/>
                    <p className="card-text">{this.state.cardName}</p>
                </div>
            </label>
        );
    }
}

class Purchase extends Component {

    constructor(props){
        super(props)
        console.log(this.props.brandName);
        this.state = {
            cardType: this.props.brandName,
            firstName : '',
            lastName: '',
            amount: '',
            cardNumber: '',
            cvv: '',
            expDateMonth: '',
            expDateYear: '',
            isSubmitted: false,
            displayResults: false,
        }

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(formSubmitEvent) {
        formSubmitEvent.preventDefault();
        this.setState(state => ({
            isSubmitted: true,
            displayResults: true,
        }));

        createOrder({
            gifter_first_name: this.state.firstName,
            gifter_last_name: this.state.lastName,
            card_number: this.state.cardNumber,
            CVV: this.state.cvv,
            exp_year: this.state.expDateYear,
            exp_month: this.state.expDateMonth,
            gift_type: this.state.brandName,
            amount: this.state.amount,
        });

    }

    displayResults(){
        if(this.state.displayResults === true){
            return <Receipt firstName={this.state.firstName} lastName={this.state.lastName} amount={this.state.amount} cardNumber={this.state.cardNumber} cvv={this.state.cvv} expDateMonth={this.state.expDateMonth} expDateYear={this.state.expDateYear}/>
        }else{
            return null;
        }
    }

    render(){
        return(
            <div>
                <div className="App">
                    <header className="App-header">
                        <form className="info" onSubmit={this.handleFormSubmit.bind(this)}>
                            <Card brandName={this.state.brandName}/>
                            <div className="fields">
                                <div className="field">
                                    First Name:
                                    <input type="text" name="firstName" onChange={e => this.setState({ firstName: e.target.value })}/>
                                    <br/>
                                </div >
                                <div className="field">
                                    Last Name:
                                    <input type="text" name="lastName" onChange={e => this.setState({ lastName: e.target.value })}/>
                                    <br/>
                                </div>
                                <div className="field">
                                    Gift Card Amount:
                                    <input type="text" name="amount" onChange={e => this.setState({ amount: e.target.value })}/>
                                    <br/>
                                </div>
                                <div className="field">
                                    Card Number:
                                    <input type="text" name="cardNumber" onChange={e => this.setState({ cardNumber: e.target.value })}/>
                                    <br/>
                                </div>
                                <div className="field">
                                    CVV:
                                    <input type="text" name="cvv" onChange={e => this.setState({ cvv: e.target.value })}/>
                                    <br/>
                                </div>
                                <div className="field">
                                    Expiration Date:
                                    <input className="expField" type="text" name="expDateMonth" onChange={e => this.setState({ expDateMonth: e.target.value })}/>
                                    <input className="expField" type="text" name="expDateYear" onChange={e => this.setState({ expDateYear: e.target.value })}/>
                                    <br/>
                                </div>
                            </div>
                            <button className="btn btn-default" type="submit">Submit</button>
                        </form>
                    </header>
                </div>
                {this.displayResults()}
            </div>

        );
    }
}

class Receipt extends Component{

    constructor(props){
        super(props);
        this.state = {
            brand : this.props.cardName,

        }
    }

    render(){
        return(
            <div className="App">
                <header className="App-header">
                    <div className="home">
                        <div className="receipt">
                            <p>Giftcard Brand: {this.props.cardName}</p>
                            <p>FirstName: {this.props.firstName}</p>
                            <p>LastName: {this.props.lastName}</p>
                            <p>Amount: {this.props.amount}</p>
                            <p>Card #: {this.props.cardNumber}</p>
                            <p>CVV: {this.props.cvv}</p>
                            <p>Expiration Date:{this.props.expDateMonth}/{this.props.expDateYear}</p>
                        </div>
                    </div>
                </header>
            </div>


        );
    }
}

export default Home;
