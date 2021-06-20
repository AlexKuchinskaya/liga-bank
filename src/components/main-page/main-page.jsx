import React from 'react';
import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import Header from '../header/header';
import Footer from '../footer/footer';
import CurrencyConverter from '../currency-convertor/currency-convertor';
import { MAX_LENGTH_HISTORY, START_SUM_OF_MONEY } from '../const/const';
import { convertMoneyWithRate } from '../utils/utils';

const MainPage = () => {
    const [fromCurrency, setFromCurrency] = useState("RUB");
    const [toCurrency, setToCurrency] = useState("USD");
    const [rate, setRate] = useState(0.5);
    const [sumOfMoney, setSumOfMoney] = useState(START_SUM_OF_MONEY);
    const [isConvertingFrom, setIsConvertingFrom] = useState(true);
    const [historyArray, setHistoryArray] = useState([]);
    console.log(`historyArray`, historyArray)
    let {moneyToConvert, moneyConverted} = convertMoneyWithRate(isConvertingFrom, sumOfMoney, rate); 
    console.log(`moneyToConvert`, moneyToConvert)
    console.log(`moneyConverted`, moneyConverted)
    const handleSumOfMoneyChangeFrom = (evt) => {
        setSumOfMoney(evt.target.value);
        setIsConvertingFrom(true);
    }
    const handleSumOfMoneyChangeTo = (evt) => {
        setSumOfMoney(evt.target.value)
        setIsConvertingFrom(false);
    }
    console.log(`sumOfMoney`, sumOfMoney)
    const handleCurrencyChangeFrom = (evt) => {
        setFromCurrency(evt.target.value)
    }

    const handleCurrencyChangeTo = (evt) => {
        setToCurrency(evt.target.value)
    }

    const handleSubmitFormConverter = (evt) => {
        evt.preventDefault();
        if (historyArray.length < MAX_LENGTH_HISTORY) {
            console.log(`Less than 10`)
            setHistoryArray([...historyArray, {
                date: 0,
                moneyTo: `${moneyToConvert} ${fromCurrency}`,
                moneyFrom: `${moneyConverted} ${toCurrency}`
            }])
        } else {
            console.log(`More than 10`)
            historyArray.shift()
            setHistoryArray([...historyArray, {
                date: 0,
                moneyTo: `${moneyToConvert} ${fromCurrency}`,
                moneyFrom: `${moneyConverted} ${toCurrency}`
            }])
        } 
        
    }
    
    return <>
    <Header isLogoLinkInHeader={true}/>
    <main className="main">
      <h1 className="visually-hidden">Лига Банк</h1>
      <section className="credit container">
        <h2 className="visually-hidden">Кредиты</h2>
        <div className="credit__container slider__list swiper-wrapper">
              <h3 className="title credit__title slider__item-title slider-item__title">Лига Банк</h3>
              <span className="credit__description slider__item-desc slider-item__desc">Кредиты на любой случай</span>
              <a className="button button__white" href="#">Рассчитать кредит</a>
        </div>
      </section>
      <section className="currency-converting container">
        <CurrencyConverter historyArray={historyArray} setHistoryArray={setHistoryArray} handleSubmitFormConverter={handleSubmitFormConverter} onSumMoneyChangeFrom={handleSumOfMoneyChangeFrom} onSumMoneyChangeTo={handleSumOfMoneyChangeTo} moneySumFrom={moneyToConvert} moneySumTo={moneyConverted} fromCurrency={fromCurrency} toCurrency={toCurrency} onCurrencyChangeFrom={handleCurrencyChangeFrom} onCurrencyChangeTo={handleCurrencyChangeTo}/>
      </section>
    </main>
    <Footer isLogoLinkInHeader={false}/>
    </ >;
};
  
  
//   MainPage.propTypes = {
//     filteredfilms: FilmsPropType,
//     promoFilm: PromoFilmPropType,
//     onResetGenre: PropTypes.func.isRequired,
//     authorizationStatus: PropTypes.string.isRequired,
//   };
  
//   const mapStateToProps = (state) => ({
//     filteredfilms: filterMoviesByGenre(state),
//     promoFilm: getPromoFilm(state),
//     authorizationStatus: getAuthorizationStatus(state),
//   });
  
//   const mapDispatchToProps = (dispatch) => ({
//     onResetGenre(genre) {
//       dispatch(resetGenre(genre));
//     },
//   });
export default MainPage;