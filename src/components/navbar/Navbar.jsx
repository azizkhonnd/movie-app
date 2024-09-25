/* eslint-disable react/prop-types */
import { RxHamburgerMenu } from "react-icons/rx";
import { useTranslation } from 'react-i18next';
import { BsBookmarksFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Modal, Badge } from 'antd';
import SiteLogo from './img/site-logo.svg';
import './Navbar.css';

const Navbar = ({ setSearchTerm, shows = [] }) => {
    const { t, i18n } = useTranslation();
    const likedShowsCount = useSelector((state) => state.tvShows.likedShows.length);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [filteredShows, setFilteredShows] = useState([]);

    const handleSearchChange = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        setSearchTerm(searchTerm);

        if (!shows || shows.length === 0) {
            setFilteredShows([]);
            return;
        }

        const filtered = shows.filter(show =>
            show.name.toLowerCase().includes(searchTerm)
        );
        setFilteredShows(filtered);
    };

    const changeLanguage = (e) => {
        i18n.changeLanguage(e.target.value);
    };

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleModalClose = () => {
        setIsModalVisible(false);
    };

    return (
        <div className="navbar__container">
            <div className="container">
                <div className="navbar__wrapper">
                    <div>
                        <Link to="/">
                            <img src={SiteLogo} alt="Site Logo" className="site__logo" width={150} height={80} />
                        </Link>
                    </div>
                    <div className="navbar__search">
                        <input
                            type="text"
                            placeholder={t('Search')}
                            onChange={handleSearchChange}
                            className="navbar__search-input"
                        />
                        <button type="submit" className="navbar__search-button">
                            <BiSearch />
                        </button>
                    </div>
                    <div className="navbar__buttons">
                        <select onChange={changeLanguage}>
                            <option value="en">{t('English')}</option>
                            <option value="ru">{t('Russian')}</option>
                        </select>
                        <div className="navbar__like">
                            <Link to="/liked-shows">
                                <Badge style={{ backgroundColor: 'red' }} count={likedShowsCount} showZero>
                                    <button className="like-button">
                                        <BsBookmarksFill size={25} color="red" />
                                    </button>
                                </Badge>
                            </Link>
                        </div>
                    </div>
                    <div className="navbar__icons">
                        <div className="navbar__search-icon" onClick={showModal}>
                            <BiSearch size={25} color="white" />
                        </div>
                        <div className="navbar__hamburger__wrapper">
                            <button className="navbar__hamburger">
                                <RxHamburgerMenu size={25} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Modal
                title={t('Search')}
                open={isModalVisible}
                onCancel={handleModalClose}
                footer={null}
                className="custom-modal"
            >
                <input
                    type="text"
                    placeholder={t('Search')}
                    onChange={handleSearchChange}
                    className="navbar__modal-search-input"
                />
                <ul className="modal__search-results">
                    {filteredShows.length === 0 ? (
                        <li>{t('No results found')}</li>
                    ) : (
                        filteredShows.map((show) => (
                            <li key={show.id}>{show.name}</li>
                        ))
                    )}
                </ul>
            </Modal>
        </div>
    );
};

export default Navbar;
