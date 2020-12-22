import { Component } from 'react';
import axios from 'axios';

class Items extends Component {
  state = { items: [] }

  componentDidMount() {
    axios.get(`/api/menus/${this.props.menuId}/items`)
      .then( res => {
        const { items } = this.state 
        this.setState({ items: [...items, res.data ]})
      })
      .catch( err => {
        console.log(err);
      })
  }

  render() {
    return(
      <>

      </>
    )
  }
} 

export default Items;