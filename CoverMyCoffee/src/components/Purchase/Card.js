import {Component} from "react";
import card from "../../media/card.png";
import React from "react";

export default class Card extends Component{

    render(){
        return(
            <label className="container">
                <div className="checkmarktwo" >
                    <img className="card" src={card} alt={"card"}/>
                    <p className="card-text">{this.props.brandName}</p>
                </div>
            </label>
        );
    }
}
