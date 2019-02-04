import React from 'react'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'


const MovieCast = (props) => {
  const movieCastResults = props.movieCast.slice(0, 20).map(r => (
      <div
        key={r.id} >
        <img src={`https://image.tmdb.org/t/p/w185/${r.profile_path}`} alt={r.name} className='top-movie-results-poster' />
        <p className='movie-cast-name'>{r.name}</p>
      </div>
  ))
  return <div className='top-movie-results'>
    <h2 className='item-details-body'>Cast</h2>
    <div >
      <Carousel infinite
        slidesPerPage={8}
        slidesPerScroll={3}
        arrows
        animationSpeed={1500}
        stopAutoPlayOnHover
        offset={50}
        itemWidth={225}
        centered
        breakpoints={{
        1000: { // these props will be applied when screen width is less than 1000px
          slidesPerPage: 3,
          clickToChange: false,
          centered: false,
          arrows: true,
          infinite: false,
          offset: 1
        },
        500: {
          itemWidth: 25,
          offset:1,
          slidesPerPage: 2,
          slidesPerScroll: 1,
          clickToChange: false,
          centered: true,
          animationSpeed: 2000,
          infinite: false,
        },
      }}
        >{movieCastResults}
        </Carousel></div>
  </div>
}

export default MovieCast