import React, {useState, useEffect} from 'react';
import FilmDetails from '../components/FilmDetails';
import SearchBar from '../components/SearchBar';

const FilmContainer = () => {

  const [films, setFilms] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getFilms();
  }, []);

  const getFilms = () => {
    console.log("getting film data...");

    fetch("https://ghibliapi.herokuapp.com/films")
      .then(function(response){
        return response.json()
      })
      .then(function(data){
        setFilms(data)
        setLoaded(true)
      })
      // simplified with arrow functions and implicit return:
      //  .then(res => res.json())
      //  .then(data => {
      //    setFilms(data)
      //    setLoaded(true)
      //  });
      .catch(error => console.log(error)
      );
  };

  const getFilmsByDirector = event => {
    // this needs to reset to all films before attempting to filter
    // tried running getFilms(), but it runs after the filter... how to prevent this?
    const filmsByDirector = films.filter(film => film.director === event.target.value);
    setFilms(filmsByDirector);
  };

  return (
    <>
      <SearchBar
        getFilmsByDirector={getFilmsByDirector} 
      />
      {films.map(
        film => {
          return (
            <FilmDetails
              film={film}
              loaded={loaded}
            />
          )
        }
      )}
    </>
  )
}

export default FilmContainer;