import React from 'react';
import Purchase from "./Purchase";
import Message from "./Message";
import card from "../media/card.png";

export default class Options extends React.Component{
    constructor () {
        super()
        this.state = {
            giftCard : '',
            submit : false,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.showPurchase = this.showPurchase.bind(this);
    }

    handleChange(option){
        this.setState({
            giftCard : option,
            submit: this.state.submit}
        );

    }

    handleFormSubmit(formSubmitEvent) {
        formSubmitEvent.preventDefault();
        if(this.state.giftCard !== ''){
            this.setState({
                    giftCard : this.state.giftCard,
                    submit: true
                }
            );
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

    render(){
        if(this.state.submit === false){
            return(
                <div id="options" className="options">
                    <form id="optionsForm" onSubmit={this.handleFormSubmit}>
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
                        <button className="button" type="submit">Submit</button>
                    </form>
                </div>
            );
        }
        else{
            return(
                <Purchase brandName={this.state.giftCard} />
            );
        }

    }
}