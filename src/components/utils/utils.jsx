export const convertMoneyWithRate = (isConvertingFrom, sumOfMoney, rate) => {
    let moneyToConvert = sumOfMoney;
    let moneyConverted
    if (isConvertingFrom) {
        moneyConverted = sumOfMoney * rate;
    }
    moneyConverted = sumOfMoney / rate;
    return {
        moneyToConvert,
        moneyConverted 
    }
}