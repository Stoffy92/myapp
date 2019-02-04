import React from 'react'
import { Link } from 'react-router-dom'

const Suggestions = (props) => {
  const options = props.searchResults.map(r => (
    <li
      key={r.id} >
      <Link key={r.id} to={`/details/${r.media_type}/${r.id}`}>
        <a href='#t' className='rating'><i className='fas fa-star fa-fw' />{r.vote_average}</a>
        <img src={`https://image.tmdb.org/t/p/w185/${r.poster_path}`} alt={r.title} className='search-results-poster' />
        <a href='#t' className='search-results-name'>{r.name}</a>
        <a href='#t' className='search-results-title'>{r.title}</a>
      </Link>
    </li>
  ))
  return <ul className='search-results'>{options}</ul>
}

export default Suggestions
