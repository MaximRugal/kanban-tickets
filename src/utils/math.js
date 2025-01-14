import numeral from 'numeral';

numeral.register('locale', 'ru', {
  delimiters: {
    thousands: ' ',
    decimal: ',',
  },
});

numeral.locale('ru');
export const formatNumber = (num) => {
  return numeral(num).format('0,0');
};
