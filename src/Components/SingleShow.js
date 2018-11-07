import React, { Component } from 'react';
import axios from 'axios';
import noimage from '../image/noImage';

class SingleShow extends Component {

    constructor() {
        super();
        this.state = {
            serie: {},
        }
    }
    componentWillMount() {
        const objid = this.props.match.params.objid
        axios.get(`http://api.tvmaze.com/shows/${objid}`)
        .then(res => {
            this.setState({ serie: res.data })
        })
    }

    render() {

        const { serie } = this.state;
        return (
            <div>
                <div className="jumbotron">
                <div className="container">
                 <div className="row">
                <div className="blog-detail-ct container" key={serie.id}>
                    <h1>{serie.name}</h1>
                  <img src={serie.image? serie.image.original: noimage} alt="serie.name" className="text-center image" /><br />
                  <p className="time">Premiered: {serie.premiered}</p>
                  <p className="time">Status: {serie.status}</p>
                  <p className="time">Language: {serie.language}</p>
                  <p className="time">Type: {serie.type}</p>
                <p>{serie.summary}</p>
                 <a href={serie.url} target="_blank"className="redbtn">Visit</a>
                </div>
                )}
                </div>
                </div>
            </div>
            </div>
        );
    }
}

export default SingleShow;