import { BiTimeFive } from "react-icons/bi";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSingleShow, fetchTvShows } from '../../redux/slices/tvShowSlice';
import { Spin, Alert } from 'antd';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import Card from '../../components/card/Card';
import { useTranslation } from 'react-i18next';
import './SingleShowPage.css';

const SingleShowPage = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedShow, loading, error, shows } = useSelector((state) => state.tvShows);

  useEffect(() => {
    dispatch(fetchSingleShow(id));
    dispatch(fetchTvShows());
  }, [dispatch, id]);

  if (loading) {
    return <Spin size="large" />;
  }

  if (error) {
    return <Alert message="Error fetching data" type="error" />;
  }

  if (!selectedShow) {
    return <p>No show details available.</p>;
  }

  const highRatingShows = shows
    .filter((show) => show.rating?.average > 7.9)
    .slice(0, 4);

  const { tvrage, thetvdb, imdb } = selectedShow.externals || {};

  return (
    <>
      <Navbar />
      <div className='container'>
        <div className="single-show-container">
          <div className="show-details">
            <div className='show__title'>
              <h1>{selectedShow.name}</h1>
              <p className='show__rating'><strong></strong> {selectedShow.rating?.average || selectedShow.rating}</p>
            </div>

            <p className='show__description' dangerouslySetInnerHTML={{ __html: selectedShow.summary }}></p>
            <p><strong></strong> {selectedShow.language}</p>
            <p className='show__genre'><strong></strong>
              {selectedShow.genres?.map((genre, index) => (
                <span key={index} className="genre-badge">{genre}</span>
              ))}
            </p>
            <p className="show__runtime"><span className="show__icon"><BiTimeFive size={20} /></span><strong></strong> {selectedShow.runtime}min</p>

            <ul className='show-links'>
              {tvrage && <li className='show__link-tvrage'><a className='show__link' href={`https://www.tvrage.com/${tvrage}`} target="_blank" rel="noopener noreferrer">TVRage</a></li>}
              {thetvdb && <li className='show__link-tvrage'><a className='show__link' href={`https://thetvdb.com/?tab=series&id=${thetvdb}`} target="_blank" rel="noopener noreferrer">TheTVDB</a></li>}
              {imdb && <li className='show__link-tvrage'><a className='show__link' href={`https://www.imdb.com/title/${imdb}`} target="_blank" rel="noopener noreferrer">IMDb</a></li>}
            </ul>
          </div>
          <img
            src={selectedShow.image?.original || 'https://via.placeholder.com/500x750'}
            alt={selectedShow.name}
          />
        </div>

        <div className="recommended-shows">
          <h2 className="recommended-shows__title">{t('Recommended Shows')}</h2>
          <Card showIds={highRatingShows.map(show => show.id)} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleShowPage;
