import React from 'react';

const FilmDetails = ({film, loaded}) => {
  if (!loaded){
    return <p>Loading...</p>
  }

  return (
    <>
      <h3>{film.title} ({film.original_title})</h3>
      <p>Director: {film.director}</p>
      <p>Producer: {film.producer}</p>
      <p>Release: {film.release_date}</p>
    </>
  )
}

export default FilmDetails;