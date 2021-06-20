
import React from 'react';
import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import Logo from '../logo/logo';
import { allNavSiteLinks } from '../const/const';

const Header = ({isLogoLinkInHeader, activeLink}) => {
    return <>
      <header className="header">
        <div className="container">
            <div className="header__wrapper">
                <Logo isLogoLinkInHeader={isLogoLinkInHeader}/>
                <nav className="header__nav">
                    <ul className="list main-nav site-list">
                        {/* <li className="site-list__item">
                            <a className="site-list__link" href="#">Услуги</a>
                        </li>
                        <li className="site-list__item">
                            <a className="site-list__link" href="#">Рассчитать кредит</a>
                        </li>
                        <li className="site-list__item">
                            <a className="site-list__link site-list__link--active" href="#">Конвертер валют</a>
                        </li>
                        <li className="site-list__item">
                            <a className="site-list__link"  href="#">Контакты</a>
                        </li>
                        <li className="site-list__item">
                            <a className="site-list__link"  href="#">Задать вопрос</a>
                        </li> */}
                        {allNavSiteLinks.map((siteLink) => {
                            return <li key={siteLink} className="site-list__item" 
                                onClick={(evt) => {
                                    evt.preventDefault();
                                }}>
                                    <a href="#" className={`site-list__link ${siteLink === activeLink ? `site-list__link--active` : ``}`}>{siteLink}</a>
                            </li>;
                        })}
                    </ul>
                </nav>
                <div className="user-navigation">
                    <a className="user-navigation__login" href="#">
                        {/* <img src="img/icon-login.svg" width="20" height="22" alt="Вход"></img> */}
                        <svg width="20" height="22">
                            <use xlinkHref="sprite.svg#login-usage"></use>
                        </svg>
                        <span className="user-navigation__text">Войти в Интернет-банк</span>
                    </a>
                </div>
            </div>
        </div>
    </header>
    </ >;
};
  

export default Header;