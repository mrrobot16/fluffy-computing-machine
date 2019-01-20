import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { NavbarDashboardComponent } from '../header/navbar-dashboard.component'
import wallet from '../../assets/icons/wallet.svg'
import {GearIcon} from '../shared/gear-icon.component'

export class NonProfitDashboardComponent extends Component {
  render(){
    return (
      <div className="non-profit-dashboard">
      <NavbarDashboardComponent/>
      <div className="container-full">
        <div className="col bg-primary" style={{height: '15vh', marginBottom: '-10vh'}} >
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="col-12 col-xl-6" style={{minHeight: "10vh"}}>
              <div className="row mb-3">
                <div className="card w-100">
                  <div className="card-body">
                    <div className="card-text text-center">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/1/1a/EFF_Logo.svg" className="" alt="..."/>
                      <h3 className="d-flex align-items-center justify-content-center m-0">
                        Electronic Frontier Foundation
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-6" style={{minHeight: "10vh"}}>
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
          </div>
        </div>
        {/* Active Campaings */}
        <h5>Campaigns</h5>
        <div className="row mb-3">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <ul className="list-unstyled">
                <li className="media border-bottom py-4">
                  <div className="media-body">
                    <div className="row">
                      <div className="col-9">
                        <h5 className="mt-0 mb-1">General Fund</h5>
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                        </div>
                      </div>
                      <div className="col-3 d-flex align-items-center justify-content-center">
                        $15,000
                      </div>
                    </div>
                  </div>
                </li>
                <li className="media pt-4">
                  <div className="media-body">
                    <div className="row">
                      <div className="col-9">
                        <h5 className="mt-0 mb-1">Net Neutrality Impact Study</h5>
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" style={{width: '75%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                        </div>
                      </div>
                      <div className="col-3 d-flex align-items-center justify-content-center">
                        <div className="row">
                          <div className="col-12">
                            $55,000
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                </ul>
              </div>
              <div class="card-footer text-muted bg-white text-center">
                <a href="/">
                    View Past Campaigns
                </a>
              </div>
            </div>
          </div>
        </div>


        {/* Charity Activity */}
        <div className="row mb-3">
          <div className="col">
            <h5>Activity</h5>
            <ul className="list-group">
              <li className="list-group-item">
                Purchased Pumpkin Spice Lattes
                <small className="float-right">
                  1 Week Ago
                </small>
              </li>
              <li className="list-group-item">
                Completed VPN Awareness Camp...
                <small className="float-right">
                  2 Week Ago
                </small>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    )
  }
}
