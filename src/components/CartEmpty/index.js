import React from 'react';
import { Link } from 'react-router-dom';

import { BoxCart, BottonLink } from './styles';
import cartImageEmpty from '../../assets/images/empty-cart.svg';

export default function CartEmpty() {
  return (
    <BoxCart>
      <strong>Carrinho Vazio</strong>
      <img src={cartImageEmpty} alt="Carrinho vazio" />
      <span>Nenhum produto no carrinho</span>
      <Link to="/">
        <BottonLink> Continuar comprando </BottonLink>
      </Link>
    </BoxCart>
  );
}
