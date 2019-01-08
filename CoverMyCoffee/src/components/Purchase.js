import {Component} from "react";
import {createOrder} from "../actions/postActions";
import React from "react";
import Receipt from './Purchase/Receipt';
import Card from './Purchase/Card.js';

export default class Purchase extends Component {

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
            return <Receipt cardType={this.state.cardType} firstName={this.state.firstName} lastName={this.state.lastName} amount={this.state.amount} cardNumber={this.state.cardNumber} cvv={this.state.cvv} expDateMonth={this.state.expDateMonth} expDateYear={this.state.expDateYear}/>
        }else{
            return null;
        }
    }

    render(){
        if(this.state.displayResults === true){
            return(this.displayResults());
        }else{
            return(
                <div id="purchase">
                    <form className="info" onSubmit={this.handleFormSubmit.bind(this)}>
                        <Card brandName={this.state.cardType}/>
                        <h4>DISCLAIMER: This is just a DEMO, do not enter real Card Information</h4>
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
                </div>
            );
        }

    }
}