import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import {
  HomeComponent, DonorDashboardComponent, NonProfitDashboardComponent,
  SupplierComponent, SupplierSelectedComponent, SupplierSelectedItemComponent,
  DonateComponent, PurchaseComponent, WalletComponent,
  DonationActivityComponent, DonateSuccessComponent
} from '../components'
export class AppRouter extends Component {
  render(){
    return(
      <div>
        <Route exact path="/" component={HomeComponent} />
        <Route path="/donor" component={DonorDashboardComponent} />
        <Route path="/non-profit" component={NonProfitDashboardComponent} />
        <Route path="/supplier" component={SupplierComponent} />
        <Route path="/supplier-selected" component={SupplierSelectedComponent} />
        <Route path="/supplier-selected-item" component={SupplierSelectedItemComponent} />
        <Route path="/donate" component={DonateComponent} />
        <Route path="/success" component={DonateSuccessComponent} />
        <Route path="/purchase" component={PurchaseComponent} />
        <Route path="/activity" component={DonationActivityComponent} />
        <Route path="/wallet" component={WalletComponent} />
      </div>
    )
  }
}
