import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CardDetails from "./components/CardDetails";
import Home from "./components/Home";
import CharactersContextProvider from "./contexts/CharactersContext";
import SearchResults from "./components/SearchResults";
import { SearchContextProvider } from "./contexts/SearchContext";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import PageNotFound from "./components/PageNotFound";

const theme = createTheme({
  typography: {
    fontFamily: ["Comic Neue", "cursive"].join(","),
    fontSize: 13,
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* Patron de diseño HOC */}
      <CharactersContextProvider>
        <BrowserRouter>
          <SearchContextProvider>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/CardDetails/:id" component={CardDetails} />
              <Route
                exact
                path="/SearchResults/:query/page/:1"
                component={SearchResults}
              />
              <Route component={PageNotFound} />
            </Switch>
          </SearchContextProvider>
        </BrowserRouter>
      </CharactersContextProvider>
    </ThemeProvider>
  );
};

export default App;
