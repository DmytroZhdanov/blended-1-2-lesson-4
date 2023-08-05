import React from "react";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FormBtn, InputSearch, SearchFormStyled } from "./SearchForm.styled";
import PropTypes from "prop-types"; 

export const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleInput = e => {
    setQuery(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(query);

    setQuery("");
  };

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <FormBtn type="submit">
        <FiSearch size="16px" />
      </FormBtn>
      <InputSearch
        onChange={handleInput}
        placeholder="What do you want to write?"
        name="search"
        required
        value={query}
        autoFocus
      />
    </SearchFormStyled>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}