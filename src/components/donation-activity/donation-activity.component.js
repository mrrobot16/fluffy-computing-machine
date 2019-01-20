import React, { Component } from 'react'
import { BottomNavBarComponent } from '../'
export class DonationActivityComponent extends Component {
  render() {
    return(
      <div className="donation-activity">
        <h3>Donation Activity Component</h3>
          <div class="bottom-navbar">
            <BottomNavBarComponent/>
          </div>
      </div>
    )
  }
}
