import produce from 'immer';

export default function products(state = [], action) {
  switch (action.type) {
    case '@products/GET_PRODUCTS':
      return action.data;
    case '@products/SET_STATUS_IN_LOADING':
      return produce(state, draft => {
        const indexItem = draft.findIndex(p => p.id === action.id);
        if (indexItem >= 0) {
          draft[indexItem].loading = action.loading;
        }
      });

    default:
      return state;
  }
}
