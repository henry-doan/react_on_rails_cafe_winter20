import { Component } from 'react';
import axios from 'axios';
import MenuForm from './MenuForm';
import { Menu } from 'semantic-ui-react';

class Cafe extends Component {
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
    // delete in the state
  }

  render() {
    return(
      <>
        <h1>Cafe</h1>
        <MenuForm addMenu={this.addMenu} />
      </>
    )
  }
}

export default Cafe;