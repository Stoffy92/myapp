import React, { Component } from 'react'
import axios from 'axios';
import TvItemDetails from './tv_item_details'

class TvDetails extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tvDetails: []
    }
  }

  fetchTvDetails = () => {
    const tvId = this.props.match.params.id;
    const URL = 'https://api.themoviedb.org/3/tv';
    const API_KEY = 'api_key=40d60badd3d50dea05d2a0e053cc96c3&language=en-US';

    axios.get(`${URL}/${tvId}?${API_KEY}`).then(res => {
      console.log(res.data);
      this.setState({ tvDetails: res.data })
      });
   }

  componentDidMount() {
    this.fetchTvDetails()
  }
  render() {
    return (
    <div className='tv-details'>
      <TvItemDetails tvDetails={ this.state.tvDetails }/>
    </div>
    )
  }
}

export default TvDetails
