import React, { Component } from 'react'
import axios from 'axios';
import MovieDetails from './movie_details'


class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemDetails: [],
      tvDetails: []
    };
  }

  fetchItemDetails = (type = this.props.match.params.type) => {
    if (type === 'movie'){
    const itemId = this.props.match.params.id;
    const ROOT_URL = 'https://api.themoviedb.org/3/movie';
    const API_KEY = 'api_key=40d60badd3d50dea05d2a0e053cc96c3&language=en-US';

    axios.get(`${ROOT_URL}/${itemId}?${API_KEY}`).then(res => {
      console.log(res.data);
      console.log(this.props.match.params.type)
      this.setState({ itemDetails: res.data })
    });
    }
   
  };

   fetchTvDetails = (type = this.props.match.params.type) => {
    if (type === 'tv'){
    const tvId = this.props.match.params.id;
    const URL = 'https://api.themoviedb.org/3/tv';
    const API_KEY = 'api_key=40d60badd3d50dea05d2a0e053cc96c3&language=en-US';

    axios.get(`${URL}/${tvId}?${API_KEY}`).then(res => {
      console.log(res.data);
      console.log(this.props.match.params.type)
      this.setState({ tvDetails: res.data })
      });
    };
   }

  componentDidMount() {
    this.fetchItemDetails()
    this.fetchTvDetails()
  }
  
 

  render()  {
   return (
     <div>
      <MovieDetails  itemDetails={this.state.itemDetails}/>
      {/* <TvDetails tvDetails={this.state.tvDetails}/> */}
     </div>
   )     
  }
}

export default ItemDetails
