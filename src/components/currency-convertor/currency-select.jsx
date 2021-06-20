import React from 'react';
import PropTypes from 'prop-types';
import { currencyOptions } from '../const/const';

const CurrencySelect = ({onCurrencyChange, currency}) => {
    return <div className="form-convertor__selection">
        <label className="form-convertor__label" htmlFor="currency-to-convert"></label>
        <select onChange={onCurrencyChange} value={currency} className="form-convertor__select" name="currency-to-convert" id="currency-to-convert">
            {currencyOptions.map((optionCurrency) => (
                <option key={optionCurrency} value={optionCurrency} defaultValue={optionCurrency === currency ? true : false}>{optionCurrency}</option>
            ))}
        </select>
    </div>
};

// Logo.propTypes = {
//     isLogoLinkInHeader: PropTypes.bool,
//     // isOnMainPage: PropTypes.bool,
// };

export default CurrencySelect;