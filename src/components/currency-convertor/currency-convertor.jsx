import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import CurrencySelect from './currency-select';
import CurrencyInput from './currency-input';
import CurrencyHistory from './currency-history';

const CurrencyConverter = ({setHistoryArray, historyArray, handleSubmitFormConverter, onCurrencyChangeFrom, onCurrencyChangeTo, fromCurrency, toCurrency, onSumMoneyChangeFrom, moneySumFrom, moneySumTo, onSumMoneyChangeTo}) => {
    
    return (
            <div className="currency-converting__wrapper">
                <h2 className="title currency-converting__title">Конвертер валют</h2>
                <form className="currency-converting__form form-convertor" onSubmit={handleSubmitFormConverter}>
                    <div className="form-convertor__wrapper form-convertor__wrapper--process">
                        <div className="form-convertor__from">
                            <CurrencyInput onSumMoneyChange={onSumMoneyChangeFrom} moneySum={moneySumFrom}/>
                            <CurrencySelect currency={fromCurrency} onCurrencyChange={onCurrencyChangeFrom}/>
                        </div>
                        <div className="form-convertor__to">
                            <CurrencyInput onSumMoneyChange={onSumMoneyChangeTo} moneySum={moneySumTo}/>
                            <CurrencySelect currency={toCurrency} onCurrencyChange={onCurrencyChangeTo}/>
                        </div>
                    </div>
                    <div className="form-convertor__wrapper form-convertor__wrapper--saving">
                        <div>
                            <label className="form-convertor__label form-convertor__label--calendar" htmlFor="calendar"></label>
                            <input className="form-convertor__input form-convertor__input--calendar" type="text" id="calendar" placeholder="1.12.2020"></input> 
                        </div>
                        <button type="submit" className="button button--blue button--convertor">Сохранить результат</button>
                    </div>
                </form>
                <CurrencyHistory setHistoryArray={setHistoryArray} historyArray={historyArray}/>
            </div>
    )
};

// Logo.propTypes = {
//     isLogoLinkInHeader: PropTypes.bool,
//     // isOnMainPage: PropTypes.bool,
// };

export default CurrencyConverter;