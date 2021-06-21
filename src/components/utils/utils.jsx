export const convertMoneyWithRate = (isConvertingFrom, sumOfMoney, rate) => {
  let moneyToConvert = sumOfMoney;
  let moneyConverted;
  if (isConvertingFrom) {
    moneyConverted = sumOfMoney * rate;
  }
  moneyConverted = sumOfMoney / rate;
  return {
    moneyToConvert,
    moneyConverted
  };
};

export const deleteValuesFromArray = (allvalues, valueToDelete1) => {
  return allvalues.filter((element) => element !== valueToDelete1);
};
