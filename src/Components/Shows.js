import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import logo from "../image/logo.png";
import AllShows from "./AllShows";

const Shows = () => {
  const [series, setSeries] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const json = localStorage.getItem("series");
    setSeries(json);
  }, []);

  useEffect(() => {
    localStorage.setItem("series", series);
  }, [series]);

  const inputChange = useCallback(e => {
    setQuery(e.target.value);
  }, []);

  const getShow = useCallback(
    e => {
      e.preventDefault();
      axios
        .get(` http://api.tvmaze.com/search/shows?q=${query}`, {
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
        .then(res => {
          setSeries(res.data);
        })
        .catch(console.log);
    },
    [query]
  );

  return (
    <>
      <div className="jumbotron text-center">
        <img src={logo} className="white" alt="logo" />
        <br />
        <br />
      </div>
      <form style={{ marginBottom: "2rem" }} className="text-center">
        <input
          className="form__input"
          type="text"
          onChange={inputChange}
          value={query}
        />
        <button onClick={getShow} className="form__button">
          Search
        </button>
      </form>
      {series && Array.isArray(series) && (
        <>
          {series.map(obj => (
            <AllShows key={obj.show.id} obj={obj} />
          ))}
        </>
      )}
    </>
  );
};

export default Shows;
