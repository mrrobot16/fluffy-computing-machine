import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { NavbarDashboardComponent } from '../header/navbar-dashboard.component'

export class NonProfitView extends Component {
  render () { return (
    <div id="NonProfitView">
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
          </div>
        </div>
        {/* Active Campaings */}
        <h5>Campaigns</h5>
        <div className="row mb-3">
          <div className="col">
            <div className="card text-white bg-primary">
              <div className="card-body">
                <ul className="list-unstyled">
                <li className="media border-bottom py-4">
                  <div className="media-body">
                    <div className="row">
                      <div className="col-9">
                        <h5 className="mt-0 mb-1">General Fund</h5>
                        Donate directly to the organisation.
                      </div>
                      <div className="col-3 d-flex align-items-center justify-content-center">
                        <Link to='/donate' className="btn btn-large btn-success">
                          Donate
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="media pt-4">
                  <div className="media-body">
                    <div className="row">
                      <div className="col-9">
                        <h5 className="mt-0 mb-1">Net Neutrality Impact Study</h5>
                        An impact study on Net Neutrality.
                      </div>
                      <div className="col-3 d-flex align-items-center justify-content-center">
                        <div className="row">
                          <div className="col-12">
                            <button className="btn btn-success">
                              Donate
                            </button>
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
                Completed VPN Awareness Campaign
                <small className="float-right">
                  2 Week Ago
                </small>
              </li>
            </ul>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col">
          <h5>Information</h5>
          <div className="card">
            <div className="card-body">
              <div className="card-text">
                EFF provides funds for legal defense in court, presents amicus curiae briefs, defends individuals and new technologies from what it considers abusive legal threats, works to expose government malfeasance, provides guidance to the government and courts, organizes political action and mass mailings, supports some new technologies which it believes preserve personal freedoms and online civil liberties, maintains a database and web sites of related news and information, monitors and challenges potential legislation that it believes would infringe on personal liberties and fair use and solicits a list of what it considers abusive patents with intentions to defeat those that it considers without merit.
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )}
}
