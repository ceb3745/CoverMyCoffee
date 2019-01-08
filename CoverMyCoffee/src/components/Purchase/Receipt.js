import {Component} from "react";
import React from "react";

export default class Receipt extends Component{

    render(){
        return(
            <div id="receipt">
                <div className="receiptInfo">
                    <p>Giftcard Brand: {this.props.cardType}</p>
                    <p>FirstName: {this.props.firstName}</p>
                    <p>LastName: {this.props.lastName}</p>
                    <p>Amount: {this.props.amount}</p>
                    <p>Card #: {this.props.cardNumber}</p>
                    <p>CVV: {this.props.cvv}</p>
                    <p>Expiration Date:{this.props.expDateMonth}/{this.props.expDateYear}</p>
                </div>
            </div>
        );
    }
}