import React, { useState, createContext } from "react";
import { useHistory } from "react-router-dom";

const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
  let history = useHistory();
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    history.push(`/searchResults/${query}/page/1`);
    setQuery("");
    setPage(1);
  };

  return (
    <SearchContext.Provider
      value={{
        page,
        setPage,
        handleChange,
        query,
        setQuery,
        handleSubmit,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
