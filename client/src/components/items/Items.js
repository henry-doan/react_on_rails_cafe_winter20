import { Component } from 'react';
import { ItemConsumer } from '../../providers/ItemProvider';
import ItemForm from './ItemForm';
import ItemList from './ItemList';
import { Fade } from 'react-reveal';

class Items extends Component {
  componentDidMount() {
    const { getAllMenuItem, menuId } = this.props 
    getAllMenuItem(menuId)
  }

  render() {
    const { menuId, addItem, items, deleteItem, updateItem } = this.props
    return(
      <>
        <Fade left>
          <ItemForm 
            menuId={menuId}
            addItem={addItem}
          />
        </Fade>
        <ItemList 
          menuId={menuId}
          items={items}
          deleteItem={deleteItem}
          updateItem={updateItem}
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