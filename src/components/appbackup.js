import React, { Component } from 'react'
import './App.css'
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/home'
import ItemDetails from './components/item_details'
import ToggleDisplay from 'react-toggle-display';
import Suggestions from './components/suggestions'
import HeaderPoster from './components/header_poster'
import TopRatedMovies from './components/top_rated_movies'
import UpcomingMovies from './components/upcoming_movies'
import PopularMovies from './components/popular_movies'
import TvOnAir from './components/tv_on_air'
import PopularTvShows from './components/popular_tv_shows';

const API_KEY = '40d60badd3d50dea05d2a0e053cc96c3' // API KEY
const URL = 'https://api.themoviedb.org/3/search/multi?' // API URL
const PARAMS = '&page=1&include_adult=false`' // API options

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchResults: [], // API Call returns an array of results
      searchInput: '', // Search Term for API Call
			trending: [], // Banner
      topMovies: [], // Top Movies Carousel
      upcomingMovies: [], // Upcoming Movies Carousel
      popularMovies: [], // Popular Movies Carousel
      tvOnAir: [], // Airing on TV Carousel
      popularTvShows: [], // Popular Tv Shows Carousel
      show: true // Toggle elements on User Input
    }
  }

  performSearch = () => { // Requesting data from API
      let now = (this.now = Date.now());
      axios.get(`${URL}api_key=${API_KEY}&language=en-US&query=${this.state.searchInput}${PARAMS}`)
          .then((res) => {
              console.log(res.data.results);
              // Accepting response if this request was the last request made
              if (now === this.now) {
                 this.setState({ searchResults: res.data.results});
              }
          });
  }

  	getHeaderPoster = () => {
  		axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=40d60badd3d50dea05d2a0e053cc96c3&language=en-US&page=1')
  			.then((res) => {
  				console.log(res.data)
  				this.setState({ trending: res.data.results})
  			})
  	}

  	handleInputChange = () => {
      this.setState({
          searchInput: this.search.value // User input
      }, () => {
          if (this.state.searchInput && this.state.searchInput.length >1 ) {
              if (this.state.searchInput.length % 2 === 0) { // Request data on user input
                  this.performSearch();
                  this.setState({ show: false }) // Hides components when search value is changed
              }
          } else {
               this.now = Date.now();
               this.setState({ show: true }); // Shows components when search is empty
               this.setState({ searchResults: [] }) // Empties Array

          }
      });
  	}

   // Compare the item genres with the genre list and returns genre names
    handleGetGenre = genreId => {
      let mainGenre;
      if (this.props.movieGenres.genres) {
        this.props.movieGenres.genres.forEach(genre => {
          if (genre.id === genreId[0]) {
            mainGenre = genre.name;
          }
        });
      }

      return mainGenre;
    }

    getTopMovies = () => {
        axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=40d60badd3d50dea05d2a0e053cc96c3&language=en-US&page=1')
          .then((res) => {
            console.log(res.data)
            this.setState({ topMovies: res.data.results })
          })
      }

      getUpcomingMovies = () => {
        axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=40d60badd3d50dea05d2a0e053cc96c3&language=en-US&page=1')
        .then((res) => {
          console.log(res.data)
          this.setState({ upcomingMovies: res.data.results })
        })
      }

      getPopularMovies = () => {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=40d60badd3d50dea05d2a0e053cc96c3&language=en-US&page=1')
      .then((res) => {
        console.log(res.data)
        this.setState({ popularMovies: res.data.results })
      })
    }

    getTVOnAir = () => {
      axios.get('https://api.themoviedb.org/3/tv/on_the_air?api_key=40d60badd3d50dea05d2a0e053cc96c3&language=en-US&page=1')
      .then((res) => {
        console.log(res.data)
        this.setState({ tvOnAir: res.data.results })
      })
    }

    getPopularTvShows = () => {
      axios.get('https://api.themoviedb.org/3/tv/top_rated?api_key=40d60badd3d50dea05d2a0e053cc96c3&language=en-US&page=1')
      .then((res) => {
        console.log(res.data)
        this.setState({ popularTvShows: res.data.results })
      })
    }

  componentDidMount(){
  	this.getHeaderPoster()
    this.getTopMovies()
    this.getUpcomingMovies()
    this.getPopularMovies()
    this.getTVOnAir()
    this.getPopularTvShows()
  }

  render () {
    return (
      <BrowserRouter>
        <div className='App'>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route exact path='/details/:id' component={ItemDetails} />
          </Switch>
          <header>
            <img className='img-header' alt='app icon' src='Netflix_2015_logo.svg' />
            <form>
              <input
                className="search-bar"
                placeholder="Movies, Tv Shows, Genres"
                ref={input => this.search = input}
                onChange={this.handleInputChange}
              />
            </form>
          </header>
          <div className='search-results-div'>
            <Suggestions searchResults={this.state.searchResults} />
          </div>
          <ToggleDisplay if={this.state.show}>
            <HeaderPoster trending={this.state.trending}/>
            <UpcomingMovies upcomingMovies={this.state.upcomingMovies}/>
            <TopRatedMovies topMovies={this.state.topMovies}/>
            <PopularMovies popularMovies={this.state.popularMovies}/>
            <TvOnAir tvOnAir={this.state.tvOnAir}/>
            <PopularTvShows popularTvShows={this.state.popularTvShows}/>
          </ToggleDisplay>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
