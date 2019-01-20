import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './bottom-navbar.component.css'
import donate from '../../assets/icons/donate.svg'
import wallet from '../../assets/icons/wallet.svg'
import activity from '../../assets/icons/activity.svg'
export class BottomNavBarComponent extends Component {
  render(){
    return (
      <div className="bottom-navbar-buttons fixed-bottom">
        <div class="container border">

          <div class="row my-3">

            <div class="col">
              <div className="bottom-button container">
                <div className="row align-items-start">
                  <div className="col text-center">
                    <img src={donate} alt="icons"/>
                  </div>
                  <div className="col">
                    <button className="donate text-center">
                      <Link to="/donor">Donate</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="col">
              <div className="bottom-button container">
                <div className="row align-items-start">
                  <div className="col text-center">
                    <img src={wallet} alt="icons"/>
                  </div>
                  <div className="col">
                    <button className="wallet text-center">
                      <Link to="/wallet">Wallet</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="col">
              <div className="bottom-button container">
                <div className="row align-items-start">
                  <div className="col text-center">
                    <img src={activity} alt="icons"/>
                  </div>
                  <div className="col">
                    <button className="activity text-center">
                      <Link to="/activity">Activity</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}