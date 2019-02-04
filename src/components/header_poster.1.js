import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

const headerImages = (props) => {
  const imageResults = props.trending.slice(0, 5).map(r => ( // Grab firt 5 array objects
    <Link key={r.id} to={`/details/movie/${r.id}`}>
      <div key={r.id}>
        <header className='item-header-image'><img key={r.id} src={`https://image.tmdb.org/t/p/w1280${r.backdrop_path}`} alt={r.title} className='header-image' /></header>
        <h1 className='now-playing'>Latest</h1>
        <h1 className='header-title'>{r.title}</h1>
        <h4 className='header-details'>{r.overview}</h4>
      </div>
    </Link>
  ))
  return <div className='header-images'>
    <Carousel tagName='test' infinite autoPlay={4500}
    breakpoints={{
        1000: { // these props will be applied when screen width is less than 1000px
          clickToChange: false,
          autoPlay: 4500,
        },
        500: {
          slidesPerPage: 1,
          slidesPerScroll: 1,
          autoPlay: 4500,
          animationSpeed: 2000,
          infinite: true,
        },
      }}>{imageResults}</Carousel>
  </div>
}

export default headerImages
