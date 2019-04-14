import React, { Component } from 'react';

export default class InputForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            productTypes: [
                'loan',
                'savings'
            ],
            personalInformation: {
                'firstName': 'John',
                'lastName': 'Doe',
                'email': 'john@example.com',
                'city': 'New York',
                'state': 'NY',
                'workPhone': '2125551234',
                'primaryPhone': '2125556789',
                'address1': '45 West 21st Street',
                'address2': '5th Floor',
                'zipcode': '10010',
                'monthsAtAddress': 5,
                'driversLicenseNumber': '111222333',
                'driversLicenseState': 'NY',
                'ipAddress': '8.8.8.8',
                'activeMilitary': false,
                'militaryVeteran': true,
                'dateOfBirth': '1993-10-09',
                'educationLevel': 'associate',
                'ssn': '111-22-3333'
            },
            loanInformation: {
                'purpose': 'home_refi',
                'loanAmount': 10000
            },
            mortgageInformation: {
                'propertyType': 'condo',
                'propertyStatus': 'own_outright',
                'propertyValue': 200000,
                'mortgageBalance': 10000,
                'lenderName': 'Bank OF NY',
                'hasFHALoan': true,
                'currentWithLoan': true
            },
            creditCardInformation: {
                'allowAnnualFee': true,
                'cardBenefits': [
                    'travel_incentives'
                ]
            },
            'creditInformation': {
                'providedCreditRating': 'excellent',
                'providedNumericCreditScore': 750
            },
            financialInformation: {
                'employmentStatus': 'employed',
                'employmentPayFrequency': 'weekly',
                'annualIncome': 120000,
                'monthlyNetIncome': 10000,
                'bankName': 'Santander',
                'bankRoutingNumber': '231372691',
                'bankAccountType': 'savings',
                'monthsAtBank': 10,
                'bankAccountNumber': '1234567890'
            },
            'employmentInformation': {
                'employerName': 'EVEN Financial',
                'employerAddress': '45 W 21st St',
                'employerCity': 'New York',
                'employerState': 'NY',
                'employerZip': '10010',
                'jobTitle': 'Software Engineer',
                'monthsEmployed': 14,
                'directDeposit': true,
                'payDate1': '2004-10-06',
                'payDate2': '2004-11-06'
            },
            'legalInformation': {
                'consentsToFcra': true,
                'consentsToTcpa': true,
                'tcpaLanguage': 'I agree to be contacted by Even Financial and its partners at the telephone number(s) I have provided above to explore personal loan offers, including contact through automatic dialing systems, artificial or pre-recorded voice messaging, or text message. I understand my consent is not required as a condition to purchasing any goods or services from anyone.'
            },
            'clientTags': {
                'hello': [
                    'world',
                    'there'
                ],
                'something': [
                    'else'
                ]
            }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        console.log(this.state);
        e.preventDefault();
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
                      <option value="excellent">excellent</option>
                      <option value="good">good</option>
                      <option value="fair">fair</option>
                      <option value="poor">poor</option>
                      <option value="limited">limited</option>

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
                      this.setState({ financialInformation: { ...this.state.financialInformation, annualIncome: e.target.value } });
                  }} >
                  </input>
              </label><br/>
              <input type="submit" value="Submit" />

          </form>
      );
  }
}

const creditMap = {
    excellent: 730,
    good: 680,
    fair: 640,
    poor: 580,
    limited: 520
};