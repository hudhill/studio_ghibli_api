import React from 'react';

const SearchBar = (props) => {
  return (
    <div>
      <h1>Studio Ghibli Films</h1>
      <span>Search by Director: </span>
      <select onChange={props.getFilmsByDirector}>
        <option value="Hayao Miyazaki">Hayao Miyazaki</option>
        <option value="Isao Takahata">Isao Takahata</option>
        <option value="Yoshifumi Kondō">Yoshifumi Kondō</option>
        <option value="Hiroyuki Morita">Hiroyuki Morita</option>
        <option value="Gorō Miyazaki">Gorō Miyazaki</option>
        <option value="Hiromasa Yonebayashi">Hiromasa Yonebayashi</option>
        <option value="Michaël Dudok de Wit">Michaël Dudok de Wit</option>
      </select>
    </div>
  );
};

export default SearchBar;