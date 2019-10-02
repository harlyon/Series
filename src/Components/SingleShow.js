import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import noimage from '../image/noImage';

const SingleShow = (props) => {

    const [serie, setSerie] = useState({});

    useEffect(() => {
      const objid = props.match.params.objid
        axios.get(`http://api.tvmaze.com/shows/${objid}`)
        .then(res => {
            setSerie(res.data)
            console.log(res.data);
        })
    })

        return (
            <div>
                <div className="jumbotron">
                <div className="container">
                 <div className="row">
                <div className="blog-detail-ct container" key={serie.id}>
                <Link to="/"className="blackbtn">Back</Link><br /><br />
                <h1>{serie.name}</h1>
                  <img src={serie.image? serie.image.original: noimage} alt="serie.name" className="text-center image" /><br />
                  <p className="time">Premiered: {serie.premiered}</p>
                  <p className="time">Status: {serie.status}</p>
                  <p className="time">Language: {serie.language}</p>
                  <p className="time">Type: {serie.type}</p>
                  <div dangerouslySetInnerHTML={ { __html: serie.summary } }></div>
                 <a href={serie.url} rel="noopener" className="redbtn">More Information</a>
                </div>
                )}
                </div>
                </div>
            </div>
            </div>
        );
}

export default SingleShow;