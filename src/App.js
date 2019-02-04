import React, { Component } from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/home'
import TvDetails from './components/tv_details'
import MovieDetails from './components/movie_details'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className='App'>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route exact path='/details/movie/:id' component={MovieDetails} />
            <Route exact path='/details/tv/:id' component={TvDetails} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
