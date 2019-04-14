/* eslint-disable import/no-webpack-loader-syntax */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { postLead } from '../fetcher';

import './style.css';

class Offers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            personalInformation:
          {
              firstName: 'Jane',
              lastName: 'Doe',
              email: 'john@example.com',
              city: 'New York',
              state: 'NY',
              workPhone: '2125551234',
              primaryPhone: '2125556789',
              address1: '45 West 21st Street',
              address2: '5th Floor',
              zipcode: '10010',
              monthsAtAddress: 5,
              driversLicenseNumber: '111222333',
              driversLicenseState: 'NY',
              ipAddress: '8.8.8.8',
              activeMilitary: false,
              militaryVeteran: true,
              dateOfBirth: '1998-10-09',
              educationLevel: 'bachelors',
              ssn: '857-96-4941' },
            loanInformation: { purpose: 'home_refi', loanAmount: 10000 },
            creditInformation: {
                providedCreditRating: 'excellent',
                providedNumericCreditScore: 750,
            },
            mortgageInformation: {
                propertyStatus: 'own_outright',
            },
            financialInformation: {
                employmentStatus: 'employed',
                employmentPayFrequency: 'weekly',
                annualIncome: 0
            },
            result: null
        };
    }

    componentDidMount() {
        this.load();
    }

    async load() {
        const params = this.state;
        const response = await postLead(params);
        this.setState({
            offers: JSON.parse(response).loanOffers,
        });
    }

    render() {
        if (this.state.offers == null) {
            return null;
        }
        console.error('1:', this.state.offers[1]);
        return (
            <div className="offers">
                <img src="/final.png" style= {{ width: 360, padding: 18 }}/>
                <div className="offer-tab">
                    <img src= {'http://' + this.state.offers[0].originator.images[0].url} alt= {this.state.offers[0].originator.name} />
                    <span> | </span>
                    <span> {this.state.offers[0].maxApr} % </span>
                    <span> | </span>
                    <span> ${this.state.offers[0].maxAmount}</span>
                    <span> | </span>
                    <span> {this.state.offers[0].termLength} {this.state.offers[0].termUnit}</span>
                    <span> | </span>
                    <span> ${this.state.offers[0].monthlyPayment}</span>
                    <span> | </span>
                    <a href= {this.state.offers[0].url} target="_">
                        <button type="button" className="apply">Apply Now</button>
                    </a>
                </div>
                <div className="offer-tab">
                    <img src= {'http://' + this.state.offers[1].originator.images[0].url} alt= {this.state.offers[1].originator.name} />
                    <span> | </span>
                    <span> {this.state.offers[1].maxApr} % </span>
                    <span> | </span>
                    <span> ${this.state.offers[1].maxAmount}</span>
                    <span> | </span>
                    <span> {this.state.offers[1].termLength} {this.state.offers[1].termUnit}</span>
                    <span> | </span>
                    <span> ${this.state.offers[1].monthlyPayment}</span>
                    <span> | </span>
                    <a href= {this.state.offers[1].url} target="_">
                        <button type="button" className="apply">Apply Now</button>
                    </a>
                </div>
                <div className="offer-tab">
                    <img src= {'http://' + this.state.offers[2].originator.images[0].url} alt= {this.state.offers[2].originator.name} />
                    <span> | </span>
                    <span> {this.state.offers[2].maxApr} % </span>
                    <span> | </span>
                    <span> ${this.state.offers[2].maxAmount}</span>
                    <span> | </span>
                    <span> {this.state.offers[2].termLength} {this.state.offers[2].termUnit}</span>
                    <span> | </span>
                    <span> ${this.state.offers[2].monthlyPayment}</span>
                    <span> | </span>
                    <a href= {this.state.offers[2].url} target="_">
                        <button type="button" className="apply">Apply Now</button>
                    </a>
                </div>
                <div className="offer-tab">
                    <img src= {'http://' + this.state.offers[3].originator.images[0].url} alt= {this.state.offers[3].originator.name} />
                    <span> | </span>
                    <span> {this.state.offers[3].maxApr} % </span>
                    <span> | </span>
                    <span> ${this.state.offers[3].maxAmount}</span>
                    <span> | </span>
                    <span> {this.state.offers[3].termLength} {this.state.offers[3].termUnit}</span>
                    <span> | </span>
                    <span> ${this.state.offers[3].monthlyPayment}</span>
                    <span> | </span>
                    <a href= {this.state.offers[3].url} target="_">
                        <button type="button" className="apply">Apply Now</button>
                    </a>
                </div>
                <div className="offer-tab">
                    <img src= {'http://' + this.state.offers[4].originator.images[0].url} alt= {this.state.offers[4].originator.name} />
                    <span> | </span>
                    <span> {this.state.offers[4].maxApr} % </span>
                    <span> | </span>
                    <span> ${this.state.offers[4].maxAmount}</span>
                    <span> | </span>
                    <span> {this.state.offers[4].termLength} {this.state.offers[4].termUnit}</span>
                    <span> | </span>
                    <span> ${this.state.offers[4].monthlyPayment}</span>
                    <span> | </span>
                    <a href= {this.state.offers[4].url} target="_">
                        <button type="button" className="apply">Apply Now</button>
                    </a>
                </div>
                <div className="offer-tab">
                    <img src= {'http://' + this.state.offers[5].originator.images[0].url} alt= {this.state.offers[5].originator.name} />
                    <span> | </span>
                    <span> {this.state.offers[5].maxApr} % </span>
                    <span> | </span>
                    <span> ${this.state.offers[5].maxAmount}</span>
                    <span> | </span>
                    <span> {this.state.offers[5].termLength} {this.state.offers[5].termUnit}</span>
                    <span> | </span>
                    <span> ${this.state.offers[5].monthlyPayment}</span>
                    <span> | </span>
                    <a href= {this.state.offers[5].url} target="_">
                        <button type="button" className="apply">Apply Now</button>
                    </a>
                </div>
                <div className="offer-tab">
                    <img src= {'http://' + this.state.offers[6].originator.images[0].url} alt= {this.state.offers[6].originator.name} />
                    <span> | </span>
                    <span> {this.state.offers[6].maxApr} % </span>
                    <span> | </span>
                    <span> ${this.state.offers[6].maxAmount}</span>
                    <span> | </span>
                    <span> {this.state.offers[6].termLength} {this.state.offers[6].termUnit}</span>
                    <span> | </span>
                    <span> ${this.state.offers[6].monthlyPayment}</span>
                    <span> | </span>
                    <a href= {this.state.offers[6].url} target="_">
                        <button type="button" className="apply">Apply Now</button>
                    </a>
                </div>
            </div>
        );
    }
}

export default Offers;
