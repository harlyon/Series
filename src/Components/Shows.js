import React, { Component } from 'react';
import axios from 'axios';
import logo from '../image/logo.png';
import AllShows from './AllShows';


class Shows extends Component {

    state = {
        series: [],
        query: '',
        loading: true
    }

    componentDidMount() {
        const json = localStorage.getItem("series");
        const series = JSON.parse(json);
        this.setState({ series });
    }

    componentDidUpdate = () => {
        const series = JSON.stringify(this.state.series);
        localStorage.setItem("series", series);
      }

    inputChange = (e) => {
        this.setState({ query: e.target.value })
    }

    getShow = (e) => {
        e.preventDefault();
        axios.get(` http://api.tvmaze.com/search/shows?q=${this.state.query}`, {
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        })
        .then(res => {
            this.setState({ series: res.data, loading: false});
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        return (
        <div>
            <div className="jumbotron text-center">
                <img src={logo} className="white" alt="logo" />
                <br />
                <br />
            </div>
            <form style={{ marginBottom:"2rem" }} className="text-center">
            <input className="form__input"
                type="text"
                onChange={this.inputChange}
                value={this.state.query}
            />
            <button onClick={this.getShow} className="form__button">Search</button>
            </form>
            <div>
                {
                    this.state.series && this.state.series.map((obj) => {
                        return(
                        <AllShows obj={obj} key={obj.show.id} />
                        )
                    })
                }
            </div>
        </div>
        );
    }
}

export default Shows;
