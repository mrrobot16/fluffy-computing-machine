import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { NavbarDashboardComponent } from '../header/navbar-dashboard.component'

export class DonateComponent extends Component {
  sendDonation(){
    console.log('Sending Donation...');
  }
  render(){
    return (
      <div className="donate">
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
          <div className="row">
            <div className="col">
              <div className="card" style={{minHeight: '60vh'}}>
                <div className="card-body">
                  <div className="text-center">
                    <img height='150' className="my-5" src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Heart_Bitcoin_-_I_love_Bitcoin.png" alt=""/>
                  </div>
                  <div className="text-center mb-3">
                    <div class="btn-group btn-group-toggle btn-block" data-toggle="buttons">
                      <label class="btn btn-primary active">
                        <input type="radio" name="options" id="option1" autocomplete="off" checked />
                        Once
                      </label>
                      <label class="btn btn-primary">
                        <input type="radio" name="options" id="option1" autocomplete="off" />
                        Weekly
                      </label>
                      <label class="btn btn-primary">
                        <input type="radio" name="options" id="option2" autocomplete="off" />
                        Monthly
                      </label>
                      <label class="btn btn-primary">
                        <input type="radio" name="options" id="option3" autocomplete="off" />
                        Yearly
                      </label>
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-primary text-white">BTC</span>
                    </div>
                    <input type="text" placeholder="0.15 BTC" className="form-control" aria-label="Amount (to the nearest dollar)" />
                    <div className="input-group-append">
                      <span className="input-group-text bg-primary text-white">$3,750.49 USD</span>
                    </div>
                  </div>

                  <button onClick={this.sendDonation}><Link to="/success">Make Donation</Link></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
