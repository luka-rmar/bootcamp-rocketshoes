export function getProducts(data) {
  return {
    type: '@products/GET_PRODUCTS',
    data,
  };
}

export function setStatusInLoading(id, loading) {
  return {
    type: '@products/SET_STATUS_IN_LOADING',
    id,
    loading,
  };
}
