const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

export const toPersianNumbersWithComma = (n) => {
  const numWithCommas = numberWithCommas(n);
  const persianNumber = toPersianNumbers(numWithCommas);
  return persianNumber;
};

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const toPersianNumbers = (n) => {
  return n.toString().replace(/\d/g, (x) => farsiDigits[parseInt(x)]);
};
