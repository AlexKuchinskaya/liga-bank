import PropTypes from 'prop-types';
import React from 'react';

const CurrencyHistory = ({historyArray, setHistoryArray}) => {

  const handleCurrencyHistoryClean = () => setHistoryArray([]);

  return (
    <div className="currency-converting__history history">
      <h3 className="title history__title">История конвертация</h3>
      <div className="history__list-container">
        <ul className="list history__list">

          {historyArray.slice(0, 5).map((historyConvert) => (
            <li key={historyConvert - historyConvert.moneyTo} className="history__item">
              <div className="history__wrapper">
                <span className="history__date">{historyConvert.date}</span>
                <span className="history__from">{historyConvert.moneyTo}</span>
                <span className="history__to">{historyConvert.moneyFrom}</span>
              </div>
            </li>
          ))}
        </ul>
        <ul className="list history__list">
          {historyArray.slice(6, 10).map((historyConvert) => (
            <li key={historyConvert - historyConvert.moneyFrom} className="history__item">
              <div className="history__wrapper">
                <span className="history__date">{historyConvert.date}</span>
                <span className="history__from">{historyConvert.moneyTo}</span>
                <span className="history__to">{historyConvert.moneyFrom}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <button className="button button--blue button--history" type="button" onClick={handleCurrencyHistoryClean}>Очистить историю</button>
    </div>
  );
};

History.propTypes = {
  historyArray: PropTypes.arrayOf(PropTypes.shape({
    moneyTo: PropTypes.string,
    moneyFrom: PropTypes.string,
    date: PropTypes.number
  })),
  setHistoryArray: PropTypes.func.isRequired
};

export default CurrencyHistory;
