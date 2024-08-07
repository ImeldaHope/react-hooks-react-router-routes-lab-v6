import React from 'react'

function Article({data}){

  return (
    <article>
        <h2>{data.name}</h2>
        <ul>{data.movies.map((movie, index) => <li key={index}>{movie}</li>)}</ul>
    </article>
  )
}

export default Article