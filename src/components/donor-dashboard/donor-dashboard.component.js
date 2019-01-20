import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { DonateComponent, BottomNavBarComponent } from '../'
import { NavbarDashboardComponent } from '../header/navbar-dashboard.component'
import wallet from '../../assets/icons/wallet.svg'
import {GearIcon} from '../shared/gear-icon.component'

import './donor-dashboard.component.scss'
const charityLogo = 'https://i.imgur.com/liZ55ZP.png'
export class DonorDashboardComponent extends Component {
  render(){
    return (
      <div className="donor-dashboard">

        <NavbarDashboardComponent/>

        <div className="container-full">
          <div className="col bg-primary" style={{height: '20vh', marginBottom: '-15vh'}} >
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
            <div className="col-12 col-xl-6" style={{minHeight: "10vh"}}>
              <div className="row justify-content-center">
                <div className="display-4 text-white mb-3">Hello World!</div>
              </div>
              <div className="row mb-3">
                <div className="card w-100">
                  <div className="card-body">
                    <div className="card-text wallet-card-text">
                      <img className="float-left" src={wallet} style={{height: '1.5em'}} alt=""/>
                      <h3 className="d-flex align-items-center justify-content-center m-0">
                        <img className="pr-1" height="25" src="https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg" alt=""/>
                        <strong className="d-inline btc-amount">2.32</strong>
                        <span className="d-inline usd-amount">($8,594)</span>
                      </h3>
                      <Link to='/wallet' className="configureIcon" >
                        <GearIcon/>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Charity Activity */}
            <div className="row mb-3">
              <div className="col">
                <h5>Activity</h5>
                <ul className="list-group">
                  <li className="list-group-item">Cras justo odio</li>
                  <li className="list-group-item">Dapibus ac facilisis in</li>
                </ul>
              </div>
            </div>

            {/* Followed Charities */}
            <h5>Contributed Funds</h5>
            <div className="row">
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <ul className="list-unstyled">
                      <Link to="/fund" className="text-decoration-none text-dark">
                        <li className="media border-bottom py-4">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/1/1a/EFF_Logo.svg" className="mr-3" alt="..."/>
                          <div className="media-body">
                            <h5 className="mt-0 mb-1">Electronic Frontier Foundation</h5>
                            Cras sit amet nibh libero, in gravida nulla.
                          </div>
                        </li>
                      </Link>
                      <Link to="/fund" className="text-decoration-none text-dark">
                        <li className="media pt-4">
                          <img src="https://avatars3.githubusercontent.com/u/4633127?s=200&v=4" className="mr-3" alt="..."/>
                          <div className="media-body">
                            <h5 className="mt-0">Code For Miami</h5>
                            Cras sit amet nibh libero, in gravida nulla.
                          </div>
                        </li>
                      </Link>
                    </ul>
                  </div>
                  <div class="card-footer text-muted bg-white text-center">
                    <a href="/">
                        View More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="donor-dashboard-links">
            <ul>
              {/* <li>
                  <Link to="/charity">Select New Charity</Link>
                </li>
              */}
              <li>
                <Link to="/activity">Activity History</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
