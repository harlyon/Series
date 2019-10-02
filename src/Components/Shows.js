import React, { useState } from "react";
import axios from "axios";
import { APIProvider } from '../APIContext'
import AllShows from "./AllShows";
import logo from "../image/logo.png";

const Shows = () => {
    const [series, setSeries] = useState([]);
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(true);

    const inputChange = e => {
        setQuery(e.target.value);
    };

    const getShow = e => {
        e.preventDefault();
        axios
            .get(` http://api.tvmaze.com/search/shows?q=${query}`, {
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                }
            })
            .then(res => {
                setLoading(false);
                setSeries(res.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <APIProvider value={series}>
            <div>
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
                <div>
                    {series.length && <AllShows />})}
                </div>
            </div>
        </APIProvider>
    );
}

export default Shows;
