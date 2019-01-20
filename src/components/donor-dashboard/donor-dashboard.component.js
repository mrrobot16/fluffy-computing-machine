import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { DonateComponent, BottomNavBarComponent } from '../'
import './donor-dashboard.component.css'
const charityLogo = 'https://i.imgur.com/liZ55ZP.png'
export class DonorDashboardComponent extends Component {
  render(){
    return (
      <div className="donor-dashboard">
        <div className="donor-dashboard-links">
          <ul>
            {/* <li>
                <Link to="/charity">Select New Charity</Link>
              </li>
            */}
            <li>
              <Link to="/wallet">View Wallet</Link>
            </li>
            <li>
              <Link to="/activity">Activity History</Link>
            </li>
          </ul>
        </div>
        <div className="charity-to-fund">
          <img src={charityLogo} alt="charityLogo"/>
          <p>you're currently donating to <span><strong>The Salvation Army</strong></span></p>
        </div>
        <div className="donate-form">
          <DonateComponent/>
        </div>
        <div class="bottom-navbar">
          <BottomNavBarComponent/>
        </div>
      </div>
    )
  }
}
