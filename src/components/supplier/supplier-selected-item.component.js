import React, { Component } from 'react'

export class SupplierSelectedItemComponent extends Component {
  render(){
    return(
      <div className="supplier-selected-item">

        <div className="container">
          <div className="col my-4">
            <h5 className="text-center">Be Smart Get Prepared 100 Piece First Aid Kit, Clean, Treat and Protect most inquries</h5>
          </div>

          <div className="col">
            <img src="https://picsum.photos/300/300"></img>
          </div>

          <div className="row mx-5 my-5">

            <button type="button" class="btn btn-primary mx-3">Quantity: 1</button>
            <button type="button" class="btn btn-primary mx-3">Add to Cart</button>

          </div>

          <div className="col">
            <h4>About the Product</h4>
            <p>FREE SURVIVAL ITEMS & FIRST AID GUIDE WHEN YOU BUY ORIGINAL FROM SELLER "M2" BRANDS": Attatch your kit to your equipment or gear with the bonus Carabiner + Compass, Emergency Blanket & Whistle. Also receive our exclusive First Aid Guide for tips on how to treat common injuries. Delivered via email</p>
          </div>
        </div>

      </div>
    )
  }
}