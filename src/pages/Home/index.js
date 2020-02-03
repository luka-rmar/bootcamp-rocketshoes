import React, { useEffect, useState } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { connect, useDispatch } from 'react-redux';
import api from '../../services/api';
import { List } from './styles';

import currencyFormat from '../../util/formatCurrency';

function Home() {
  const dispach = useDispatch();
  const [product, SetProduct] = useState([]);

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

  return (
    <List>
      {product.map(item => (
        <li>
          <img src={item.image} alt={item.title} />
          <strong>{item.title}</strong>
          <span>{item.formatedPrice}</span>
          <button type="button">
            <div>
              <MdAddShoppingCart size={16} color="#fff" />
            </div>
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </List>
  );
}

export default connect(Home);
