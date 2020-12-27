import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const MenuContext = React.createContext();

export const MenuConsumer = MenuContext.Consumer;

class MenuProvider extends Component {
  state = { menus: [] }

  componentDidMount() {
    // grab our menus from db
    axios.get('/api/menus')
      .then( res => {
        // set to state 
        this.setState({ menus: res.data })
      })
      .catch( err => {
        console.log(err);
      })
  }

  addMenu = (menu) => {
    // add to the db
    axios.post('/api/menus', { menu })
    .then(res => {
        // add to the state
        const { menus } = this.state; 
        this.setState({ menus: [...menus, res.data]})
      })
      .catch( err => {
        console.log(err);
      })
  }

  updateMenu = (id, menu) => {
    // update to the db
    // update to the state
  }

  deleteMenu = (id) => {
    // delete in the db
    axios.delete(`/api/menus/${id}`)
      .then( res => {
        // delete in the state
        const { menus } = this.state
        this.setState({ menus: menus.filter( m => m.id !== id)})
        window.location.href = '/cafe'
        // return <Redirect to='/cafe' />
      })
      .catch( err => {
        console.log(err);
      })
  }

  render() {
    return(
      <MenuContext.Provider value={{
        ...this.state,
        addMenu: this.addMenu,
        updateMenu: this.updateMenu,
        deleteMenu: this.deleteMenu,
      }}>
        { this.props.children }
      </MenuContext.Provider>
    )
  }
}

export default MenuProvider;