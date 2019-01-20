import React, { Component } from 'react'
import salvationArmyImg from '../../assets/images/the_salvation_army.png'
import firstAidImage from '../../assets/images/first_aid.jpeg'

export class DonationActivityComponent extends Component {
  render() {
    return(
      <div className="donation-activity">
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <img src={salvationArmyImg} width="162" height="162"></img>
            </div>
            <div className="col-sm">
              <h3 style="{{ color: #749F77 }}">Donation Update</h3>
              <p>The 1.00 BTC ($3,750 USD) you donated to <b>The Salvation Army</b> has been used</p>
            </div>
            <div className="col-sm">
              <h3>Donation activity:</h3>
              <img src={firstAidImage} width="107" height="95"></img>
            </div>
            <div className="col-sm">
              <b><a href="https://example.com">Go To Dashboard</a></b>
            </div>
          </div>
        </div>
      </div>
    )
  }
}