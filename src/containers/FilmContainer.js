import React, {useState, useEffect} from 'react';
import FilmDetails from '../components/FilmDetails';
import SearchBar from '../components/SearchBar';

const FilmContainer = () => {

  const [allFilms, setAllFilms] = useState([]);
  const [filteredFilms, setFilteredFilms] = useState([])
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
        setAllFilms(data)
        setFilteredFilms(data) // intialize filtered films with all films
        setLoaded(true)
      })
      .catch(error => console.log(error)
      );
  };

  const getFilmsByDirector = event => {
    const filmsByDirector = allFilms.filter(film => film.director === event.target.value);
    setFilteredFilms(filmsByDirector);
  };

  return (
    <>
      <SearchBar
        getFilmsByDirector={getFilmsByDirector} 
      />
      {filteredFilms.map(
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