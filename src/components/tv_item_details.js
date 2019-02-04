

import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
import { Link } from 'react-router-dom'


const TvItemDetails = (props) => {
  const {tvDetails} = {...props};
      return (tvDetails && tvDetails.genres ? <div>
        <div className='item-details-main'>
          <header className='item-header-image'>
            <img key={tvDetails.id} 
              src={`https://image.tmdb.org/t/p/w1280${tvDetails.backdrop_path}`} 
              alt={tvDetails.title} className='item-details-hero-backdrop' 
            />
            <div className='item-details-hero-info'>
            <Link to={`/`}><i id='back-button' className="fas fa-chevron-left"></i></Link>
              <img className='item-details-hero-info-poster' src={`https://image.tmdb.org/t/p/w185/${tvDetails.poster_path}`} alt={tvDetails.title} />
              <div className='item-details-hero-info-details'>
                <h1 className='item-details-hero-info-title'>{tvDetails.title}</h1>
                <p>{tvDetails.vote_average} / 10</p>
                <StarRatingComponent
                  name={tvDetails.name}
                  editing={false}
                  starCount={5}
                  value={Math.round(tvDetails.vote_average / 2)} />
                <h3 className='item-details-hero-genre'>{tvDetails.genres[0].name} </h3>
              </div>
            </div>
          </header>
          <h2 className='item-details-body'>Summary</h2>
          <p className='item-details-overview'>{tvDetails.overview}</p>
        </div>
      </div> : null);
}

export default TvItemDetails
