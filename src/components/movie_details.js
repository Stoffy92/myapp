import React, { Component } from 'react'
import axios from 'axios'
import MovieItemDetails from './movie_item_details'
import MovieCast from './movie_cast'
import MovieRec from './movie_recommend'

const URL = 'https://api.themoviedb.org/3/movie';
const API_KEY = 'api_key=40d60badd3d50dea05d2a0e053cc96c3&language=en-US';

class MovieDetails extends Component {
  constructor (props) {
    super(props)
    this.state = {
      movieDetails: [],
      movieCast: [],
      movieRec: []
    }
  }

   fetchMovieDetails = () => {
    const itemId = this.props.match.params.id;
    axios.get(`${URL}/${itemId}?${API_KEY}&append_to_response=credits`).then(res => {
      this.setState({ movieDetails: res.data })
    });
  }



  fetchMovieCredits = () => {
    const itemId = this.props.match.params.id;
    axios.get(`${URL}/${itemId}/credits?${API_KEY}`).then(res => {
      this.setState({ movieCast: res.data.cast })
    })
  }

  fetchRecommendedMovies = () => {
    const itemId = this.props.match.params.id;
    axios.get(`${URL}/${itemId}/recommendations?${API_KEY}`).then(res => {
      this.setState({ movieRec: res.data.results })
    })
  }

  componentDidMount(){
    this.fetchMovieDetails()
    this.fetchMovieCredits()
    this.fetchRecommendedMovies()
  }

  componentDidUpdate(prevProps) {
    // Reloads components if user clicks on recommended movies
    if (this.props.match.params.id !== prevProps.match.params.id) {
      window.scrollTo(0, 0) // Scroll to top on Route Change
      this.fetchMovieDetails()
      this.fetchMovieCredits()
      this.fetchRecommendedMovies()
    }
  }

  render(){
    return (
      <div className='movie-details'>
        <MovieItemDetails movieDetails={ this.state.movieDetails } />
        <MovieCast movieCast={ this.state.movieCast } /> 
        <MovieRec movieRec={ this.state.movieRec } />
      </div>
    )
  }
}

export default MovieDetails
