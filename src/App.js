import React, { Component, Fragment } from 'react';
import Nav from './components/Nav';
import ProductList from './components/ProductList';
import FeedMe from './components/FeedMe';

import  {
  addCartIds,
  addCartQuantity,
  getAvailable,
  removeCartQuantity,
  removeCartIds,
  getTotal,
} from './utils';

const initialProducts = [
  { id: 1, title: 'iPhone Xs', inventory: 4, price: 22500.35 },
  { id: 2, title: 'Galaxy S9', inventory: 5, price: 10990.50 },
  { id: 3, title: 'Huawei Mate', inventory: 2, price: 12699.45 },
  { id: 4, title: 'Google Pixel 3', inventory: 3, price: 19800.70 },
  { id: 5, title: 'Motorola G6', inventory: 6, price: 5199.6 },
];

class App extends Component {
  state = {
    addedIds: [],
    quantityById: {},
    products: [],
  };

  componentDidMount () {
    this.setState({ products: initialProducts });
  }

  loadState = (addedIds, quantityById) => this.setState({ addedIds, quantityById })

  addToCart = (productId) => {
    const { addedIds, quantityById, products } = this.state;
    const product = products.find(prod => prod.id === productId);
    const available = product.inventory - (quantityById[productId] || 0);
    if (product && available > 0) {
      const newAddedIds = addCartIds(productId, addedIds);
      const newQuantityById = addCartQuantity(productId, quantityById);
      this.loadState(newAddedIds, newQuantityById);
    }
  }

  removeFromCart = (productId) => {
    const { addedIds, quantityById } = this.state;
    if (quantityById[productId] !== undefined ) {
      const newQuantityById = removeCartQuantity(productId, quantityById);
      let newAddedIds = !newQuantityById[productId] ? removeCartIds(productId, addedIds) : addedIds;
      this.loadState(newAddedIds, newQuantityById);
    }
  }

  deleteFromCart = (productId) => {
    const { addedIds, quantityById } = this.state;
    if (quantityById[productId]) {
      const newQuantityById = {
        ...quantityById,
        [productId]: undefined,
      }
      const newAddedIds = addedIds.filter(id => id !== productId);
      this.loadState(newAddedIds, newQuantityById);
    }
  }

  render() {
    const { quantityById, addedIds, products } = this.state;
    const available = getAvailable(quantityById, products);
    const total = getTotal(quantityById, addedIds, products);
    return (
      <Fragment>
        <Nav total={total} />
        <ProductList
          available={available}
          products={products}
          addToCart={this.addToCart}
          removeFromCart={this.removeFromCart}
          deleteFromCart={this.deleteFromCart}
        />
        <FeedMe />
      </Fragment>
    );
  }
}

export default App;
