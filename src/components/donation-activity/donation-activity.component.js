import React, { Component } from 'react'
import salvationArmyImg from '../../assets/images/the_salvation_army.png'
import firstAidImage from '../../assets/images/first_aid.jpeg'
import { BottomNavBarComponent } from '../'
export class DonationActivityComponent extends Component {
  render() {
    return(
      <div className="donation-activity">
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <img src={salvationArmyImg} width="162" height="162" alt="salvationArmyImg"></img>
            </div>
            <div className="col-sm">
              <p>Donation Update</p>
              <p>The 1.00 BTC ($3,750 USD) you donated to <b>The Salvation Army</b> has been used</p>
            </div>
            <div className="col-sm">
              <h3>Donation activity:</h3>
              <img src={firstAidImage} width="107" height="95" alt="firstAidImage"></img>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam.</p>
            </div>
          </div>
        </div>
        <div className="bottom-navbar">
          <BottomNavBarComponent/>
        </div>
      </div>
    )
  }
}
