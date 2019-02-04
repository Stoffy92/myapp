import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

const MovieRec = (props) => {
  const movieRecResults = props.movieRec.map(r => (
    <Link key={r.id} to={`/details/movie/${r.id}`}>
      <div
        key={r.id} >
        <img src={`https://image.tmdb.org/t/p/w185/${r.poster_path}`} alt={r.title} className='top-movie-results-poster' />
      </div>
    </Link>
  ))
  return <div className='top-movie-results'>
    <h2 className='item-details-body'>More Like This</h2>
    <div className='cara'>
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
          itemWidth: 80,
          centered: false,
          arrows: true,
          infinite: false,
          offset: 30
        },
        500: {
          itemWidth: 70,
          offset: 30,
          slidesPerPage: 2,
          slidesPerScroll: 1,
          clickToChange: false,
          centered: true,
          animationSpeed: 2000,
          infinite: false,
        },
      }}>{movieRecResults}</Carousel></div>
  </div>
}

export default MovieRec
