export const addCartIds = (productId, addedIds) =>
  addedIds.find(id => id === productId) ? addedIds : addedIds.concat(productId)

export const removeCartIds = (productId, addedIds) => addedIds.filter(id => id !== productId) 

export const addCartQuantity = (productId, quantityById) => ({
  ...quantityById,
  [productId]: (quantityById[productId] || 0) + 1, 
});

export const removeCartQuantity = (productId, quantityById) => ({
  ...quantityById,
  [productId]: quantityById[productId] > 1 ? quantityById[productId] - 1 : undefined, 
});

export const  getAvailable = (quantityById, products) => products.reduce(
  (res, product) => ({
      ...res,
      [product.id]:
        quantityById[product.id] ? product.inventory - quantityById[product.id] : product.inventory,
    }),
  {},
);

export const getTotal = (quantityById, addedIds, products) => addedIds.reduce(
  (res, id) => res + products.find(product => product.id === id).price * (quantityById[id] || 0),
  0
);

export const formatNumber = (number) =>
  new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(number)