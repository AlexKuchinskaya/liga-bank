import PropTypes from 'prop-types';
import React from 'react';

const CurrencyHistory = ({historyArray, setHistoryArray}) => {

    const handleCurrencyHistoryClean = () => setHistoryArray([])

    return (
        <div className="currency-converting__history history">
            <h3 className="title history__title">История конвертация</h3>
            <div className="history__list-container">
                <ul className="list history__list">
                    
                    {historyArray.slice(0, 4).map((historyConvert) => (
                        <li className="history__item">
                            <div className="history__wrapper">
                                <span className="history__date">{historyConvert.date}</span>
                                <span className="history__from">{historyConvert.moneyTo}</span>
                                <span className="history__to">{historyConvert.moneyFrom}</span>
                            </div>
                        </li>
                    ))}
                </ul>
                <ul className="list history__list">
                    {historyArray.slice(5, 9).map((historyConvert) => (
                        <li className="history__item">
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
    )
}

// History.propTypes = {
//     history: PropTypes.arrayOf(PropTypes.shape({
//         amountFrom: PropTypes.string,
//         amountTo: PropTypes.string,
//         date: PropTypes.string
//     })),
//     onSetHistory: PropTypes.func.isRequired
// };

export default CurrencyHistory;