import styled from 'styled-components';
import { darken } from 'polished';

// eslint-disable-next-line import/prefer-default-export
export const BoxCart = styled.div`
  background: #fff;
  width: 100%;
  height: auto;
  border-radius: 4px;
  padding: 18px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  strong {
    font-size: 24px;
    color: #4f4f4f;
  }

  img {
    height: 220px;
    color: #4f4f4f;
  }

  span {
    color: #4f4f4f;
  }
`;

export const BottonLink = styled.button`
  background: #7159c1;
  color: #fff;
  border: #7159c1 1px solid;
  border-radius: 4px;
  margin-top: 10px;

  padding: 10px 16px;
  font-weight: bold;
  text-transform: uppercase;
  transition: background 0.2s;

  &:hover {
    background: #fff;
    color: #7159c1;
    border: #7159c1 1px solid;
  }
`;
