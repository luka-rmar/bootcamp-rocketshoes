import { useSelector } from 'react-redux';
import { put, call, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import currencyFormat from '../../../util/formatCurrency';

import api from '../../../services/api';
import { addCartSuccess, updateAmountSuccess } from './action';

function* addCart({ id }) {
  const itemExists = useSelector(state => state.cart.find(i => i.id === id));

  const stock = yield call(api.get, `/stock/${id}`);

  const amountStock = stock.data.amount;
  const valueAmount = itemExists ? itemExists.amount : null;

  const amount = valueAmount + 1;

  if (amount > amountStock) {
    toast.error('Quantidade acima do limite em estoque');
  }

  if (itemExists) {
    yield put(updateAmount(id, amount));
  } else {
    const response = yield call(api.get, `products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      formatedPrice: currencyFormat(response.data.price),
    };

    yield put(addCartSuccess(data));
  }
}

function* updateAmount(id, amount) {
  if (amount <= 0) return;

  const stock = yield call(api.get, `stock/${id}`);
  const amountStock = stock.data.amount;

  if (amount > amountStock) {
    toast.error('Quantidade acima do limite em estoque');
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest('@cart/ADD_CART_REQUEST', addCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
