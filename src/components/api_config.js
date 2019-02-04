import React, { Component } from 'react'
import axios from 'axios'

class Apiconfig extends Component {
  componentDidMount () {
    axios.get('https://api.themoviedb.org/3/configuration?api_key=40d60badd3d50dea05d2a0e053cc96c3')
      .then((res) => { // export this component
        console.log(res.data)
      })
  }

  render () {
    return (
      <div />
    )
  }
}

export default Apiconfig
