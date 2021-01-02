import React, { Component } from 'react';
import axios from 'axios';

const ItemContext = React.createContext();

export const ItemConsumer = ItemContext.Consumer;

class ItemProvider extends Component {
  state = { items: [] }

  getAllMenuItem = (menuId) => {
    axios.get(`/api/menus/${menuId}/items`)
      .then( res => {
        this.setState({ items: res.data })
      })
      .catch( err => {
        console.log(err);
      })
  }

  addItem = (menuId, item) => {
    axios.post(`/api/menus/${menuId}/items`, { item })
      .then(res => {
        const { items } = this.state 
        this.setState({ items: [...items, res.data] })
      })
      .catch( err => {
        console.log(err);
      })
  }

  deleteItem = (menuId, id) => {
    axios.delete(`/api/menus/${menuId}/items/${id}`)
      .then( res => {
        const { items } = this.state 
        this.setState({ items: items.filter( i => i.id !== id)})
      })
      .catch( err => {
        console.log(err);
      })
  }

  updateItem = (menuId, id, item) => {
    axios.put(`/api/menus/${menuId}/items/${id}`, { item })
      .then(res => {
        const items = this.state.items.map( i => {
          if (i.id === id) {
            return res.data
          }
          return i
        })
        this.setState({ items })
      })
      .catch( err => {
        console.log(err);
      })
  }

  render() {
    return(
      <ItemContext.Provider value={{
        ...this.state,
        getAllMenuItem: this.getAllMenuItem,
        addItem: this.addItem,
        deleteItem: this.deleteItem,
        updateItem: this.updateItem,
      }}>
        { this.props.children }
      </ItemContext.Provider>
    )
  }
}

export default ItemProvider;