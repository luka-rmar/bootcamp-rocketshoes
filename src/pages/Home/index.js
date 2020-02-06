import React, { useEffect, useState } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'react-shimmer';

import * as ActionsCart from '../../store/modules/cart/action';
import api from '../../services/api';
import { List } from './styles';

import currencyFormat from '../../util/formatCurrency';

export default function Home() {
  const [product, SetProduct] = useState([]);
  const dispach = useDispatch();

  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, item) => {
      sumAmount[item.id] = item.amount;
      return sumAmount;
    }, {})
  );

  useEffect(() => {
    async function loadDate() {
      const response = await api.get('products');
      const date = response.data.map(value => ({
        ...value,
        formatedPrice: currencyFormat(value.price),
      }));
      SetProduct(date);
    }
    loadDate();
  }, []);

  function handleItem(id) {
    dispach(ActionsCart.addCartRequest(id));
  }

  return (
    <List>
      {product.map(item => (
        <li key={item.id}>
          <Image
            src={item.image}
            width={250}
            height={250}
            style={{ objectFit: 'cover' }}
            delay={25}
            duration={0.9}
            alt={item.title}
          />
          <strong>{item.title}</strong>
          <span>{item.formatedPrice}</span>
          <button type="button" onClick={() => handleItem(item.id)}>
            <div>
              <MdAddShoppingCart size={16} color="#fff" />
              {amount[item.id] || 0}
            </div>
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </List>
  );
}
