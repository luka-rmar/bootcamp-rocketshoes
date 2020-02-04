import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';

import currencyFormat from '../../util/formatCurrency';
import * as ActionsCart from '../../store/modules/cart/action';
import { Container, TableItens, Total } from './styles';

export default function Cart() {
  const itens = useSelector(state =>
    state.cart.map(item => ({
      ...item,
      subTotal: currencyFormat(item.price * item.amount),
    }))
  );
  const total = useSelector(state =>
    currencyFormat(
      state.cart.reduce((sumTotal, item) => {
        return sumTotal + item.price * item.amount;
      }, 0)
    )
  );

  const dispach = useDispatch();
  function increment(item) {
    dispach(ActionsCart.updateAmountRequest(item.id, item.amount + 1));
  }
  function decrement(item) {
    dispach(ActionsCart.updateAmountRequest(item.id, item.amount - 1));
  }

  function deleteItem(id) {
    dispach(ActionsCart.removeItem(id));
  }

  return (
    <Container>
      <TableItens>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
          </tr>
        </thead>
        <tbody>
          {itens.map(item => (
            <tr key={item.id}>
              <td>
                <img src={item.image} alt={item.title} />
              </td>
              <td>
                <strong>{item.title}</strong>
                <span>{item.formatedPrice}</span>
              </td>
              <td>
                <div>
                  <button type="button" onClick={() => decrement(item)}>
                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                  </button>
                  <input type="number" readOnly value={item.amount} />
                  <button type="button" onClick={() => increment(item)}>
                    <MdAddCircleOutline size={20} color="#7159c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong> {item.subTotal} </strong>
              </td>
              <td>
                <button type="button" onClick={() => deleteItem(item.id)}>
                  <MdDelete sixe={20} color="#7159c1" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </TableItens>
      <footer>
        <button type="button">Finalizar Pedido</button>
        <Total>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
}
