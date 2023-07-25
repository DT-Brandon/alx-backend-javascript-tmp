function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {};
  const gpds = `gdp-${getCurrentYear()}`;
  const incomes = `income-${getCurrentYear()}`;
  const capital = `capita-${getCurrentYear()}`;

  budget[incomes] = income;
  budget[gpds] = gdp;
  budget[capital] = capita;

  return budget;
}
