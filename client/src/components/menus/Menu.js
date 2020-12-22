import { Component } from 'react';
import Items from '../items/Items';

class Menu extends Component {

  render() {
    return(
      <Items menuId={this.props.id} />
    )
  }
}

export default Menu;