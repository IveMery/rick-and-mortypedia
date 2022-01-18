import React, { useState, useEffect, createContext } from "react";
import { API_URL } from "../constants";

export const CharactersContext = createContext();

const CharactersContextProvider = ({ children }) => {
  const [dataFetch, setDataFetch] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [numOfPages, setNumOfPages] = useState();

  const getData = () => {
    setIsLoading(true);
    fetch(`${API_URL} ${page}`)
      .then((res) => res.json())
      .then((data) => {
        setDataFetch(data.results);
        setNumOfPages(data.info.pages);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, [page]);

  return (
    //patron de diseño provider
    <CharactersContext.Provider
      value={{
        isLoading,
        dataFetch,
        numOfPages,
        page,
        setPage,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};

export default CharactersContextProvider;
