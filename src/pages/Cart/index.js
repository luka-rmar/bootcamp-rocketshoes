import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { Container, TableItens, Total } from './styles';

export default function Cart() {
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
          <tr>
            <td>
              <img
                src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom1.jpg"
                alt="Produto"
              />
            </td>
            <td>
              <strong>Produto</strong>
              <span>R$180,50</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input type="number" readOnly value={1} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>
            <td>
              <strong> R$180,30</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete sixe={20} color="#7159c1" />
              </button>
            </td>
          </tr>
        </tbody>
      </TableItens>
      <footer>
        <button type="button">Finalizar Pedido</button>
        <Total>
          <span>TOTAL</span>
          <strong>R$1920,33</strong>
        </Total>
      </footer>
    </Container>
  );
}
