import React, { useState } from "react";
import NavBar from "./components/navBar";
import { Route, Switch } from "react-router-dom";
import Main from "./components/main";
import Favorites from "./components/favorites";
import DevelopersList from "./components/developersList";
import SearchForm from "./components/searchForm";

const App = () => {
  const [valueForFiltrationBySearch, setValueForFiltrationBySearch] =
    useState();

  const getValueFromSearch = (params) => {
    setValueForFiltrationBySearch(params);
  };

  return (
    <>
      <NavBar />
      <SearchForm onGetValue={getValueFromSearch} />
      <Switch>
        <Route path="/favorites" component={Favorites} />
        <Route
          path="/developers/:developerId?"
          render={() => (
            <DevelopersList
              valueForFiltrationBySearch={valueForFiltrationBySearch}
            />
          )}
        />
        <Route path="/" component={Main} />
      </Switch>
    </>
  );
};

export default App;
