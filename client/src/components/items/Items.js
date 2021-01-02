import { Component } from 'react';
import { ItemConsumer } from '../../providers/ItemProvider';
import ItemForm from './ItemForm';

class Items extends Component {
  componentDidMount() {
    const { getAllMenuItem, menuId } = this.props 
    getAllMenuItem(menuId)
  }

  render() {
    const { menuId, addItem } = this.props
    return(
      <>
        <ItemForm 
          menuId={menuId}
          addItem={addItem}
        />
      </>
    )
  }
} 

const ConnectedItems = (props) => (
  <ItemConsumer>
    { value => 
      <Items
        {...value}
        {...props}
      />
    }
  </ItemConsumer>
)

export default ConnectedItems;