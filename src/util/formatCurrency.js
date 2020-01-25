export default function currencyFormnat(date) {
  return date.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}
