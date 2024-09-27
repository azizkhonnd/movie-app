import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <div className='footer__container'>
            <div className='container'>
                <div className='footer__wrapper'>
                    <div className='footer__links__wrapper'>
                        <h3 className='footer__title'>{t('Help')}</h3>
                        <Link className='footer__links' to='/'>{t('Faqs')}</Link>
                        <Link className='footer__links' to='/'>{t('Account management')}</Link>
                        <Link className='footer__links' to='/'>{t('Contact us')}</Link>
                        <Link className='footer__links' to='/'>{t('Content guidelines')}</Link>
                    </div>
                    <div className='footer__links__wrapper'>
                        <h3 className='footer__title'>{t('Discover')}</h3>
                        <Link className='footer__links' to='/'>{t('Top tv shows')}</Link>
                        <Link className='footer__links' to='/'>{t('New releases')}</Link>
                        <Link className='footer__links' to='/'>{t('Trending now')}</Link>
                        <Link className='footer__links' to='/'>{t('Genres')}</Link>
                        <Link className='footer__links' to='/'>{t('Tv show awards')}</Link>
                        <Link className='footer__links' to='/'>{t('Upcoming shows')}</Link>
                    </div>
                    <div className='footer__links__wrapper'>
                        <h3 className='footer__title'>{t('Terms')}</h3>
                        <Link className='footer__links' to='/'>{t('Privacy-policy')}</Link>
                        <Link className='footer__links' to='/'>{t('Terms and conditions')}</Link>
                        <Link className='footer__links' to='/'>{t('Cookie policy')}</Link>
                        <Link className='footer__links' to='/'>{t('Content licensing')}</Link>
                    </div>
                    <div className='footer__links__wrapper'>
                        <h3 className='footer__title'>{t('Partners')}</h3>
                        <Link className='footer__links' to='/'>{t('Advertise with us')}</Link>
                        <Link className='footer__links' to='/'>{t('Affiliate program')}</Link>
                        <Link className='footer__links' to='/'>{t('Partner with us')}</Link>
                    </div>
                    <div className='footer__links__wrapper'>
                        <h3 className='footer__title'>{t('About')}</h3>
                        <Link className='footer__links' to='/'>{t('About platform')}</Link>
                        <Link className='footer__links' to='/'>{t('Press center')}</Link>
                        <Link className='footer__links' to='/'>{t('Careers')}</Link>
                        <Link className='footer__links' to='/'>{t('Investor relations')}</Link>
                    </div>
                </div>
                <div className='line'></div>
                <div className='footer__link__contain'>
                    <Link className='footer__links' to='/'>{t('Privacy policy')}</Link> |
                    <Link className='footer__links' to='/'>{t('Terms of use')}</Link> |
                    <Link className='footer__links' to='/'>{t('Site development')}</Link> |
                    <Link className='footer__links' to='/'>{t('Careers')}</Link>
                </div>
                <div className='footer__copyright'>
                    <p>{t('© 2024 TV Show Platform. All rights reserved.')}</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
