import React from 'react';
import './MovieCard.scss';
import { Movie } from '../../Movie/Movie';

type Props = {
  movie: Movie
};

export const MovieCard: React.FC<Props> = ({ movie }) => (
  <div className="card">
    <div className="card-image">
      <figure className="image is-4by3">
        <img
          className="card-image__size"
          src={movie.imgUrl}
          alt="Film logo"
        />
      </figure>
    </div>

    <div className="card-content">
      <div className="media">
        <div className="media-left">
          <figure className="image is-48x48">
            <img src="images/imdb-logo.jpeg" alt="imdb" />
          </figure>
        </div>

        <div className="media-content">
          <p className="title is-8">{movie.title}</p>
        </div>
      </div>
      {movie.description && (
        <div className="content">
          {movie.description}
          <br />
          <a href={movie.imdbUrl}>IMDB</a>
        </div>
      )}
    </div>
  </div>
);
