const parseDollar = (money) => `$${money.toLocaleString('en', { minimumFractionDigits: 2 })}`;

export default parseDollar;
