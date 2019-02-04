import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
import { Link } from 'react-router-dom'

const MovieItemDetails = (props) => {
  const {movieDetails} = {...props};
      return (movieDetails && movieDetails.genres ? <div>
        <div className='item-details-main'>
          <header className='item-header-image'>
            <img key={movieDetails.id} 
              src={`https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path}`} 
              alt={movieDetails.title} className='item-details-hero-backdrop' 
            />
            <div className='overlay'></div>
            <div className='item-details-hero-info'>
            <Link to={`/`}><i id='back-button' className="fas fa-chevron-left"></i></Link>
              <img className='item-details-hero-info-poster' src={`https://image.tmdb.org/t/p/w185/${movieDetails.poster_path}`} alt={movieDetails.title} />
              <div className='item-details-hero-info-details'>
                <h1 className='item-details-hero-info-title'>{movieDetails.title}</h1>
                <p>{movieDetails.vote_average} / 10</p>
                <StarRatingComponent
                  name={movieDetails.title}
                  editing={false}
                  starCount={5}
                  value={Math.round(movieDetails.vote_average / 2)} />
                <h3 className='item-details-hero-genre'>{movieDetails.genres[0].name} |  {movieDetails.genres[1].name} </h3>
              </div>
            </div>
          </header>
          <h2 className='item-details-body'>Summary</h2>
          <p className='item-details-overview'>{movieDetails.overview}</p>
        </div>
      </div> : null);
}

export default MovieItemDetails

