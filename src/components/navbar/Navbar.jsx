import { RxHamburgerMenu } from "react-icons/rx";
/* eslint-disable react/prop-types */
import { useTranslation } from 'react-i18next';
import { BsBookmarksFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SiteLogo from './img/site-logo.svg';
import { Badge } from 'antd';
import './Navbar.css';

const Navbar = ({ setSearchTerm }) => {
    const { t, i18n } = useTranslation();
    const likedShowsCount = useSelector((state) => state.tvShows.likedShows.length);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const changeLanguage = (e) => {
        i18n.changeLanguage(e.target.value);
    };

    return (
        <div className="navbar__container">
            <div className="container">
                <div className="navbar__wrapper">
                    <Link to="/">
                        <img src={SiteLogo} alt="Site Logo" className="navbar__logo" width={150} height={80} />
                    </Link>
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
                                    <button className="like-button"><BsBookmarksFill size={25} color="red" /></button>
                                </Badge>
                            </Link>
                        </div>
                    </div>
                    <div className="navbar__hamburger__wrapper">
                        <button className="navbar__hamburger">
                            <RxHamburgerMenu size={25} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
