import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import Details from "./Details";
import SearchParams from "./SearchParams";
import { Provider } from "./ThemeContext";

const App = () => {
  return (
    <Provider>
      <div>
        <header>
          <Link to="/">Adopt Me!</Link>X
        </header>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
