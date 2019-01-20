import React, { Component } from 'react'

export class NonProfitDashboardComponent extends Component {
  render(){
    return (
      <div className="non-profit-dashboard">
        <div className="container">

          <div className="row">

            <div className="col-sm">
              <h3 className="text-center">Your current balance</h3>
            </div>

            <div className="col-sm container">

              <div className="container border">

                <div className="row">
                  <div className="col-4">
                    <img className="pr-1" height="45" src="https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg" alt=""/>
                  </div>

                  <div className="col-4">
                    <h1>737.73</h1>
                  </div>

                  <div className="col-4">
                    <h4 className="text-right">BTC</h4>
                  </div>
                </div>

              </div>

              <div className="col">
                <h3 className="float-right">$2,729,601.00</h3>
              </div>

            </div>

            <div className="col container border">
              <div className="col">
                <span>31.23 BTC</span>
                <div></div>
              </div>
              <div className="col"></div>
              <div className="col"></div>
            </div>

          </div>

          <div className="col container">
            <div className="col text-center my-3">
              <button className="btn btn-primary .btn-block" type="submit">Place an order</button>
            </div>
            <div className="col text-center my-3">
              <button className="btn btn-primary .btn-block" type="submit">Create Campaign</button>
            </div>

            <div>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</span>
            </div>
          </div>
        </div>

      </div>
    )
  }
}