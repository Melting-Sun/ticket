import React from "react";
import "./Ticket.css";

export default class Ticket extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            countriesData: {
                Iran: ["Tabriz", "Tehran", "Shiraz", "Esfahan", "Mashhad"],
                Turkey: ["Istanbul", "Ezmir", "Ankara", "Antaliya"],
                US: ["Los Angles", "San Diego", "Chicago"],
            },
            mainCountryCities: [],
            firstNameData: '',
            lastNameData: '',
            emailData: '',
            phoneNumberData: ''

        }

        this.firstNameDataHandler = this.firstNameDataHandler.bind(this)
        this.lastNameDataHandler = this.lastNameDataHandler.bind(this)
        this.emailDataHandler = this.emailDataHandler.bind(this)
        this.phoneNumberDataHandler = this.phoneNumberDataHandler.bind(this)
        this.selectHandler = this.selectHandler.bind(this)
    }



    firstNameDataHandler(event) {
        this.setState(
            { firstNameData: event.target.value }
        )
    }

    lastNameDataHandler(event) {
        this.setState(
            { lastNameData: event.target.value }
        )
    }

    emailDataHandler(event) {
        this.setState(
            { emailData: event.target.value }
        )
    }

    phoneNumberDataHandler(event) {
        this.setState(
            { phoneNumberData: event.target.value }
        )
    }


    selectHandler(event) {
        let mainCountry = event.target.value

        if (mainCountry === -1) {
            this.setState(
                { mainCountryCities: [] }
            )
        }
        else {
            let mainCountryCities = this.state.countriesData[mainCountry]

            this.setState(
                { mainCountryCities: mainCountryCities }
            )
        }



    }







    render() {
        return (
            <div className="container">

                <div className="col-md-6 box">
                    <input className="fnameInput" placeholder="First Name"
                        value={this.state.firstNameData}
                        onChange={this.firstNameDataHandler}

                    />
                </div>

                <div className="col-md-6 box">
                    <input className="lnameInput" placeholder="Last Name"
                        value={this.state.lastNameData}
                        onChange={this.lastNameDataHandler}
                    />

                </div>
                <div className="col-md-6 box">
                    <input className="phoneInput" placeholder="Phone Number"
                        value={this.state.phoneNumberData}
                        onChange={this.phoneNumberDataHandler}
                    />

                </div>
                <div className="col-md-6 box">
                    <input className="emailInput" placeholder="Email"
                        value={this.state.emailData}
                        onChange={this.emailDataHandler}
                    />

                </div>
                <div className="col-md-6 box">
                    <select className="countrySelect" onChange={this.selectHandler}>
                        <option value="-1">Please Select ...</option>
                        <option className="option" value="Iran">Iran</option>
                        <option className="option" value="Turkey">Turkey</option>
                        <option className="option" value="US">United State</option>
                    </select>
                </div>
                <div className="col-md-6 box">
                    <select className="citySelect">
                        {this.state.mainCountryCities.length ? this.state.mainCountryCities.map(city => (
                            <option value={city}>{city}</option>
                        )) : (
                            <option value='-1'>please select something!</option>
                        )}

                    </select>
                </div>
                <div className="col-md-12 box">
                    <button className="btn">Book a ticket</button>
                </div>

            </div>

        )
    }
}
