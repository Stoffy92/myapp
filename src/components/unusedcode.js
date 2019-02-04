// constructor(props) {
// super(props);

// this.state = {
// // searchResults: null,
// // // movies: [],
// // // selectedMovie: null
// // };
// this.movieSearch('barry');
// }

// movieSearch(query) {
// movieDBSearch({query: query, api_key: API_KEY}, movies => {
// this.setState({
// movies: movies,
// selectedMovie: movies[0]
// });
// });
// }

// componentDidMount() {
// axios.get(`https://api.themoviedb.org/3/search/movie?api_key=40d60badd3d50dea05d2a0e053cc96c3&language=en-US&query=marvel&page=1&include_adult=false
// `)
// .then(res => {
// console.log(res.data.results);
// this.setState({ movies: res.data.results});
// });
// // const movie.poster_src = 'https://image.tmdb.org/t/p/w185' + {movie.poster_path}
// }

// performSearch = (e) => {
// e.preventDefault();
// const movie = e.target.elements.movie.value
// axios.get(`https://api.themoviedb.org/3/search/multi?api_key=40d60badd3d50dea05d2a0e053cc96c3&language=en-US&query=${movie}&page=1&include_adult=false`)
// .then((res) => {
// // console.log(res.data)
// const searchResults = res.data.results;
// const searchItems = []
// searchResults.forEach((movie) => {
// console.log(movie.title)
// // const searchItem = <SearchItems movie={movie}/>
// // searchItems.push(searchItem)
// })
// this.setState({searchItems})
// })
// SEARCH COMPONENT CODE
// import React, { Component } from 'react';
// import axios from 'axios';
// import Suggestions from './suggestions';

// class Search extends Component {

// state = {
// searchInput: '',
// searchResults : []
// }

// performSearch = () => {
// axios.get(`https://api.themoviedb.org/3/search/multi?api_key=40d60badd3d50dea05d2a0e053cc96c3&language=en-US&query=${this.state.searchInput}&page=1&include_adult=false`)
// .then((res) => {
// console.log(res.data.results);
// this.setState({ searchResults: res.data.results});

// });
// }

// handleInputChange = () => {
// this.setState({
// searchInput: this.search.value
// }, () => {
// if (this.state.searchInput && this.state.searchInput.length >1 ) {
// if (this.state.searchInput.length % 2 === 0) {
// this.performSearch();
// }
// }
// });
// }

// render() {
// return (
// <form>
// <input
// className="search-bar"
// placeholder="Movies, Tv Shows, Genres"
// ref={input => this.search = input}
// onChange={this.handleInputChange}
// />
// {/* <Suggestions searchResults={this.state.searchResults} /> */}
// </form>
// );
// }
// }

// export default Search;
