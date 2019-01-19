import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { HomeComponent, DonorDashboardComponent } from '../components'
export class AppRouter extends Component {
  render(){
    return(
      <div>
        <Route exact path="/" component={HomeComponent} />
        <Route path="/donor" component={DonorDashboardComponent}/>
      </div>
    )
  }
}
