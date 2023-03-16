const parseDollar = (money) => {
  return `$${money.toLocaleString('en', { minimumFractionDigits: 2 })}`;
};

export default parseDollar;
