import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { HomeComponent } from '../components'
export class AppRouter extends Component {
  render(){
    return(
      <div>
        <Route exact path="/" component={HomeComponent} />
      </div>
    )
  }
}
