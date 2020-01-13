import React from "react";

const Search = props => {
  return (
    <form onSubmit={props.submit} className="search">
      <input
        type="text"
        value={props.value}
        onChange={props.change}
        placeholder="City..."
        className="search__input"
      />
      <button className="search__button">Check weather</button>
    </form>
  );
};

export default Search;
