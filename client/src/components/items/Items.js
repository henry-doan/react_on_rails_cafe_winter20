import { Component } from 'react';
import { ItemConsumer } from '../../providers/ItemProvider';
import ItemForm from './ItemForm';
import ItemList from './ItemList';

class Items extends Component {
  componentDidMount() {
    const { getAllMenuItem, menuId } = this.props 
    getAllMenuItem(menuId)
  }

  render() {
    const { menuId, addItem, items, deleteItem, } = this.props
    return(
      <>
        <ItemForm 
          menuId={menuId}
          addItem={addItem}
        />
        <ItemList 
          menuId={menuId}
          items={items}
          deleteItem={deleteItem}
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