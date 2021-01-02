import { Component } from 'react';
import Items from '../items/Items';
import axios from 'axios';
import { MenuConsumer } from '../../providers/MenuProvider';
import { Button, Icon } from 'semantic-ui-react';
import MenuForm from './MenuForm';

class Menu extends Component {
  state = { id: 0, title: '', created_at: '', updated_at: '', editing: false }

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

  toggleEdit = () => {
    const { editing } = this.state 
    this.setState({ editing: !editing })
  }

  render() {
    const { id, title, updated_at, editing } = this.state
    const { deleteMenu, updateMenu } = this.props
    return(
      <>
        <h1>{title}</h1>
        <h5>{updated_at}</h5>
        <Button icon color='red' onClick={() => deleteMenu(id)}>
          <Icon name='trash' />
        </Button>
        { 
          editing ? 
            <MenuForm 
              id={id}
              title={title}
              toggleEdit={this.toggleEdit}
              updateMenu={updateMenu}
            />
          :
          <Button icon color='yellow' onClick={() => this.toggleEdit()}>
            <Icon name='pencil' />
          </Button>
        }
        <Items menuId={id} />
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