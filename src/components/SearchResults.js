import React from "react";
import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { GET_SEARCH } from "../constants";
import CardItem from "./CardItem";
import { Grid } from "@material-ui/core";
import Message from "./Message";
import SearchContext from "../contexts/SearchContext";
import CustomPagination from "./CustomPagination";
import ProgressBar from "./ProgressBar";

const SearchResults = () => {
  const { query } = useParams();
  const { setPage, page } = useContext(SearchContext);
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [numOfPage, setNumOfPage] = useState();

  const getCharacterSearch = () => {
    fetch(`${GET_SEARCH}${query}&page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
        setNumOfPage(data.info.pages);
        setLoader(false);
      })
      .catch((error) => {
        setLoader(false);
        console.log(error);
      });
  };

  useEffect(() => {
    getCharacterSearch();
  }, [query, page]);

  return (
    <>
      <h3 align="center">Resultados para : {query.toUpperCase()}</h3>
      <Grid container direction="row" justifyContent="center" margin="2">
        {loader && <ProgressBar />}
        {data ? (
          data.map((item) => {
            const { name, image, status, species, id } = item;
            return (
              //render props
              <CardItem
                key={id}
                name={name}
                image={image}
                status={status}
                species={species}
                id={id}
              />
            );
          })
        ) : (
          <Message />
        )}
      </Grid>
      {numOfPage > 1 && data ? (
        <CustomPagination setPage={setPage} numOfPage={numOfPage} />
      ) : (
        ""
      )}
    </>
  );
};

export default SearchResults;
