import React, { Component } from 'react';

import { postLead } from '../fetcher';

export default class InputForm extends Component {
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
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit() {
        console.log(this.state);
        const params = this.state;
        const response = await postLead(params);
        console.log(response);
    }

  onChange = (e) => {
      console.log(e.target.value);
  }

  render() {
      return (
          <form onSubmit={this.handleSubmit}>
              <label>
          What is your SSN:
                  <input type="text" onChange={(e) => {
                      this.setState({ personalInformation: { ...this.state.personalInformation, ssn: e.target.value } });
                  }} >
                  </input>
              </label><br/>

              <label>
          Do your rent or own:
                  <select onChange={(e) => {
                      this.setState({ mortgageInformation: { ...this.state.mortgageInformation, propertyStatus: e.target.value } });
                  }}>
                      <option value="own_outright">Own</option>
                      <option value="own_with_mortgage">Own with Mortgage</option>
                      <option value="rent">Rent</option>
                  </select>
              </label><br/>

              <label>
          What is your credit rating:
                  <select onChange={(e) => {
                      this.setState({ creditInformation: { ...this.state.creditInformation,
                          providedCreditRating: e.target.value,
                          providedNumericCreditScore: creditMap[e.target.value] } });
                  }}>
                      <option value="excellent">720 and above</option>
                      <option value="good">660 to 719</option>
                      <option value="fair">600 to 659</option>
                      <option value="poor">600 and below</option>
                      <option value="limited">600 and below</option>

                  </select>
              </label><br/>

              <label>
          Education level:
                  <select onChange={(e) => {
                      this.setState({ personalInformation: { ...this.state.personalInformation, educationLevel: e.target.value } });
                  }}>
                      <option value="associate">associate</option>
                      <option value="bachelors">bachelors</option>
                      <option value="high_school">high_school</option>
                      <option value="masters">masters</option>
                      <option value="other">other</option>
                      <option value="other_grad_degree">other_grad_degree</option>
                  </select>
              </label><br/>

              <label>

          Employment Status:
                  <select onChange={(e) => {
                      this.setState({ financialInformation: { ...this.state.financialInformation, employmentStatus: e.target.value } });
                  }}>
                      <option value="employed">employed</option>
                      <option value="military">military</option>
                      <option value="not_employed">not employed</option>
                      <option value="other">other</option>
                      <option value="retired">retired</option>
                      <option value="self_employed">self employed</option>
                  </select>
              </label><br/>

              <label>

          Employment Pay frequency:
                  <select onChange={(e) => {
                      this.setState({ financialInformation: { ...this.state.financialInformation, employmentPayFrequency: e.target.value } });
                  }}>
                      <option value="weekly">weekly</option>
                      <option value="biweekly">biweekly</option>
                      <option value="twice_monthly">twice_monthly</option>
                      <option value="monthly">monthly</option>
                  </select>
              </label><br/>

              <label>
          What is your annual income:
                  <input type="text" onChange={(e) => {
                      this.setState({ financialInformation: { ...this.state.financialInformation, annualIncome: parseInt(e.target.value) } });
                  }} >
                  </input>
              </label><br/>
              <button type="button" onClick={this.handleSubmit}>Click Me!</button>

          </form>
      );
  }
}

const creditMap = {
    excellent: 750,
    good: 680,
    fair: 640,
    poor: 580,
    limited: 520
};