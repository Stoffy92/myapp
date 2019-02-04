import React from 'react'

import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

const MovieTrailers = (props) => {
  const movieTrailerResults = props.movieTrailers.map(r => (
      <div className='movie-trailer-container'
        key={r.id} >
        <iframe className='iframe' key={r.id} title ={r.name} src={`https://www.youtube.com/embed/${r.key}`}></iframe>
      </div>
  ))
  return <div className='movie-details-trailer'>
    <h2 className='item-details-body'>Trailers</h2>
    <div>
      <Carousel 
        slidesPerPage={1}
        slidesPerScroll={1}
        arrows
        animationSpeed={1500}
        stopAutoPlayOnHover
        offset={300}
        itemWidth={500}
        breakpoints={{
        1000: { // these props will be applied when screen width is less than 1000px
          slidesPerPage: 1,
          clickToChange: false,
          itemWidth: 80,
          centered: false,
          arrows: true,
          infinite: false,
          offset: 30
        },
        500: {
          itemWidth: 70,
          offset: 30,
          slidesPerPage: 1,
          slidesPerScroll: 1,
          clickToChange: false,
          centered: true,
          animationSpeed: 2000,
          infinite: false,
        },
      }}
        >{movieTrailerResults}</Carousel></div>
  </div>
}

export default MovieTrailers