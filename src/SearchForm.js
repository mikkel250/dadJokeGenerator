import React from "react";
import "./SearchForm.css";

const SearchForm = (props) => {
  const onSubmit = (event) => {
    event.preventDefault();
    props.onFormSubmit();
  };

  return (
    <form onSubmit={onSubmit} className="search-form">
      <input
        type="text"
        placeholder="Enter Search Term...."
        onChange={(event) => props.onSearchValueChange(event.target.value)}
      />
      <div>
        <button disabled={props.isSearching}>Search</button>
        <button
          onClick={props.onSingleSearchClick} // can't call onClick with a parm directly, so need to use an anonymous funciton
          disabled={props.isSearching}
        >
          I'm Feeling Funny
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
