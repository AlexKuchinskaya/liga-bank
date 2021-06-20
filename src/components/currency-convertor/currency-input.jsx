import React from 'react';
import PropTypes from 'prop-types';

const CurrencyInput = ({onSumMoneyChange, moneySum}) => {
    return <div className="form-convertor__conversion">
        <label className="form-convertor__label" htmlFor="from-convert">У меня есть</label>
        <input className="form-convertor__input" type="number" id="from-convert" onChange={onSumMoneyChange} value={moneySum}></input>
    </div>
};
// пропс name?
// Logo.propTypes = {
//     isLogoLinkInHeader: PropTypes.bool,
//     // isOnMainPage: PropTypes.bool,
// };

export default CurrencyInput;