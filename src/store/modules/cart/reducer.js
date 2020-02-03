import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_CART_SUCCESS':
      return produce(state, draft => {
        const { item } = action;
        draft.push(item);
      });
    case '@cart/UPDATE_AMOUNT_SUCCESS':
      return produce(state, draft => {
        const indexItem = draft.findIndex(i => i.id === action.id);
        if (indexItem >= 0) {
          draft[indexItem].amount = Number(action.amount);
        }
      });
    case '@cart/REMOVE_ITEM':
      return produce(state, draft => {
        const indexItem = draft.findIndex(i => i.id === action.amount);
        if (indexItem >= 0) {
          draft.slice(indexItem, 1);
        }
      });
    default:
      return state;
  }
}
