// eslint-disable-next-line import/prefer-default-export
export function addCartRequest(id) {
  return {
    type: '@cart/ADD_CART_REQUEST',
    id,
  };
}

export function addCartSuccess(item) {
  return {
    type: '@cart/ADD_CART_SUCCESS',
    item,
  };
}

export function updateAmountRequest(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_REQUEST',
    id,
    amount,
  };
}

export function updateAmountSuccess(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_SUCCESS',
    id,
    amount,
  };
}

export function removeItem(id) {
  return {
    type: '@cart/REMOVE_ITEM',
    id,
  };
}
