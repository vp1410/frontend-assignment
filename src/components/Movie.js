import React from 'react';
import ReactModal from 'react-modal';
import { useModal } from 'react-modal-hook';
import moment from 'moment';
const THUMBNAIL_API = 'https://image.tmdb.org/t/p/original';

const Movie = ({
  title,
  poster_path,
  vote_average,
  release_date,
  overview,
  vote_count,
}) => {
  const [showModal, hideModal] = useModal(() => (
    <ReactModal className="parent-modal" isOpen>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <p style={{ fontWeight: 'bold' }}>{title}</p>
        <button onClick={hideModal}>X</button>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <img src={THUMBNAIL_API + poster_path} alt={title}></img>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginLeft: '10px',
          }}
        >
          <h4>Release date: {moment(release_date).format('LL')}</h4>

          <p style={{ fontSize: '14px' }}>{overview}</p>

          <p>
            {vote_average}/10 ({vote_count + ''} total votes)
          </p>
        </div>
      </div>
    </ReactModal>
  ));
  return (
    <div className="movie">
      <img
        src={THUMBNAIL_API + poster_path}
        alt={title}
        onClick={showModal}
      ></img>

      <span id="circle">{vote_average}</span>

      {/* <span>{vote_average}</span> */}
      <div className="movie-information">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default Movie;
