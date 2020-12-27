import { Component } from 'react';
import Items from '../items/Items';
import axios from 'axios';
import { MenuConsumer } from '../../providers/MenuProvider';
import { Button, Icon } from 'semantic-ui-react';

class Menu extends Component {
  state = { id: 0, title: '', created_at: '', updated_at: '' }

  componentDidMount() {
    const { id } = this.props.match.params
    axios.get(`/api/menus/${id}`)
      .then( res => {
        this.setState({ ...res.data })
      })
      .catch( err => {
        console.log(err);
      });
  }

  render() {
    const { id, title, updated_at } = this.state
    const { deleteMenu } = this.props
    return(
      <>
        <h1>{title}</h1>
        <h5>{updated_at}</h5>
        <Button icon color='red' onClick={() => deleteMenu(id)}>
          <Icon name='trash' />
        </Button>
      {/* <Items menuId={this.props.id} /> */}
      </>
    )
  }
}

const ConnectedMenu = (props) => (
  <MenuConsumer>
    { value => (
      <Menu 
        {...props}
        deleteMenu={value.deleteMenu}
        updateMenu={value.updateMenu}
      />
    )}
  </MenuConsumer>
)

export default ConnectedMenu;