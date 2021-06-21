import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../logo/logo';
import {deleteValuesFromArray} from '../utils/utils';
import {allNavSiteLinks, VALUE_TO_DELETE, footerSocialInfo, footerContactslInfo} from '../const/const';

const Footer = ({isLogoLinkInHeader}) => {
  const footerNavLinksList = deleteValuesFromArray(allNavSiteLinks, VALUE_TO_DELETE);

  return <>
    <footer className="footer container">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__info information-footer">
            <Logo isLogoLinkInHeader={isLogoLinkInHeader}/>
            <p className="information-footer__text">150015, г. Москва, ул. Московская, д. 32 Генеральная лицензия Банка России №1050 Ⓒ Лига Банк, 2019</p>
          </div>
          <div className="nav-footer">
            <ul className="list footer__nav nav-footer__list">
              {footerNavLinksList.map((siteLink) => {
                return <li key={siteLink} className="nav-footer__item">
                  <a href="#" className="nav-footer__link">{siteLink}</a>
                </li>;
              })}
            </ul>
          </div>
          <div className="footer__contacts contacts-footer">
            <ul className="list contacts-footer__list">
              {footerContactslInfo.map((contact) => {
                return <li key={contact.name} className={`contacts-footer__item contacts-footer__item--${contact.name}`}>
                  <a href={`tel:${contact.tel.replace(/\s/g, ``)}`} className="contact__footer__link">{contact.tel}</a>
                  <p className="contact__footer__description">{contact.description}</p>
                </li>;
              })}
            </ul>
          </div>
          <div className="footer__social social-footer">
            <ul className="list social-footer__list">
              {footerSocialInfo.map((social) => {
                return <li key={social.name} className="social-footer__item">
                  <a href="#" className="social-footer__link">
                    <img src={social.src} alt={social.name}></img>
                  </a>
                </li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </ >;
};

Footer.propTypes = {
  isLogoLinkInHeader: PropTypes.bool.isRequired,
};

export default Footer;
