/* eslint-disable react/prop-types */
import { BiBookmark } from "react-icons/bi";
import { BsFillBookmarkFill } from "react-icons/bs";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchTvShows, likeShow, unlikeShow } from '../../redux/slices/tvShowSlice';
import { Spin, Alert } from 'antd';
import { useTranslation } from 'react-i18next';
import './Card.css';

const Card = ({ showIds, searchTerm = '' }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { shows, likedShows, loading, error } = useSelector((state) => state.tvShows);

  useEffect(() => {
    if (!showIds) {
      dispatch(fetchTvShows());
    }
  }, [dispatch, showIds]);

  const toggleLike = (showId) => {
    if (likedShows.includes(showId)) {
      dispatch(unlikeShow(showId));
    } else {
      dispatch(likeShow(showId));
    }
  };

  const handleCardClick = (showId) => {
    navigate(`/show/${showId}`);
  };

  if (loading) {
    return <Spin size="large" />;
  }

  if (error) {
    return <Alert message={t('errorFetchingData')} type="error" />;
  }

  const filteredShows = shows.filter(show =>
    show.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const showsToDisplay = showIds
    ? filteredShows.filter(show => showIds.includes(show.id))
    : filteredShows;

  if (!showsToDisplay.length) {
    return <p>{t('noShowsAvailable')}</p>;
  }

  return (
    <div className="container">
      <div className="card-container">
        {showsToDisplay.map((show) => (
          <div key={show.id} className="card" onClick={() => handleCardClick(show.id)}>
            <img
              className="card-image"
              src={show.image?.medium || 'https://via.placeholder.com/210x295'}
              alt={show.name}
            />
            <div className="card__info">
              <div>
                <h2>{show.name}</h2>
                <div className='card__genre__wrapper'>
                  <p><b>2024</b></p>
                  <p className='card__genre'>{Array.isArray(show.genres) ? show.genres.join(', ') : t('genreUnavailable')}</p> {/* Translation for 'N/A' or unavailable genres */}
                </div>
              </div>
              <div>
                <button
                  className={`like-button__card ${likedShows.includes(show.id) ? 'liked' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleLike(show.id);
                  }}
                >
                  {likedShows.includes(show.id) ? <BsFillBookmarkFill size={30} /> : <BiBookmark size={29} />}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
