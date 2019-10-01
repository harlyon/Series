import React from "react";
import noimage from "../image/noImage";

const AllShows = ({ obj }) => (
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="movie-item-style-2">
          <img
            src={obj.show.image ? obj.show.image.medium : noimage}
            alt={obj.show.id}
          />
          <div className="mv-item-infor">
            <h6>
              <a href={obj.show.id}>{obj.show.name}</a>
            </h6>
            <p className="describe">
              {/* {
                                    obj.show.summary.replace(/<\/?[a-z]+>/gi, '').lenght < 100 ? `${obj.show.summary.replace(/<\/?[a-z]+>/gi, '')}` : `${obj.show.summary.replace(/<\/?[a-z]+>/gi, '').substring(0, 95)}......`
                                    ? obj.show.summary: <p>No Information</p>
                                  } */}
            </p>
            <p className="run-time">
              {"Genre: "}
              {obj.show.genres.map(genre => (
                <React.Fragment key={genre}>
                  <span>{genre} </span>
                </React.Fragment>
              ))}
            </p>
            <p>
              type: <a href="/">{obj.show.type}</a>
            </p>
            <p>
              Premiered: <a href="/">{obj.show.premiered}</a>
            </p>
            <p>
              Language: <a href="/">{obj.show.language}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AllShows;
