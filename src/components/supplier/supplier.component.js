import React, { Component } from 'react'

export class SupplierComponent extends Component {
  render(){
    return(
      <div className="supplier">
        <div className="container">

          <div className="col my-5">
            <h3 className="text-center">Select a category below</h3>
          </div>

          <div className="col container">

            <div className="row my-5">

              <div className="col container">

                <div className="row justify-content-center">
                  <img src="https://picsum.photos/127/111"></img>
                </div>

                <div className="text-center">
                  <span className="text-center">Non-perishables</span>
                </div>

              </div>

              <div className="col container">

                <div className="row justify-content-center">
                  <img src="https://picsum.photos/127/111"></img>
                </div>

                <div className="text-center">
                  <span className="text-center">First Aid</span>
                </div>

              </div>

            </div>

            <div className="row my-5">

              <div className="col container">

                <div className="row justify-content-center">
                  <img src="https://picsum.photos/127/111"></img>
                </div>

                <div className="text-center">
                  <span className="text-center">Disaster Relief</span>
                </div>

              </div>

              <div className="col container">

                <div className="row justify-content-center">
                  <img src="https://picsum.photos/127/111"></img>
                </div>

                <div className="text-center">
                  <span className="text-center">Provisions</span>
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    )
  }
}