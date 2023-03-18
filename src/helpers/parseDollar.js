const parseDollar = (money) => `$${money.toLocaleString('en', { minimumFractionDigits: 0 })}`;

export default parseDollar;
