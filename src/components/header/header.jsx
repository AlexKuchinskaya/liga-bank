
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
                        <svg className="user-navigation__icon" width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.22222 14.3H4.44444V19.8H17.7778V2.2H4.44444V7.7H2.22222V1.1C2.22222 0.808262 2.33929 0.528472 2.54766 0.322183C2.75603 0.115892 3.03865 0 3.33333 0H18.8889C19.1836 0 19.4662 0.115892 19.6746 0.322183C19.8829 0.528472 20 0.808262 20 1.1V20.9C20 21.1917 19.8829 21.4715 19.6746 21.6778C19.4662 21.8841 19.1836 22 18.8889 22H3.33333C3.03865 22 2.75603 21.8841 2.54766 21.6778C2.33929 21.4715 2.22222 21.1917 2.22222 20.9V14.3ZM8.88889 9.9V6.6L14.4444 11L8.88889 15.4V12.1H0V9.9H8.88889Z" fill="#1F1E25"/>
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