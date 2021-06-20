import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Logo = ({isLogoLinkInHeader}) => {
  return <>
        {/* <Link className={`logo ${isLogoLinkInHeader ? `header__logo` : ``}`} to={isOnMainPage ? `#` : `/`} aria-label="На главную">
            <img src="img/logo-liga.svg" width="28" height="25" alt="Лого"></img>
            <span className="logo__text">ЛИГА Банк</span>
        </Link> */}
        <a className={`logo ${isLogoLinkInHeader ? `header__logo` : ``}`} href="#" aria-label="На главную">
            <img src="img/logo-liga.svg" width="28" height="25" alt="Лого"></img>
            <span className="logo__text">ЛИГА Банк</span>
        </a>
  </>;
};

Logo.propTypes = {
    isLogoLinkInHeader: PropTypes.bool,
    // isOnMainPage: PropTypes.bool,
};

export default Logo;