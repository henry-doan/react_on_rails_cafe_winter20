import { Grid } from 'semantic-ui-react';
import Item from './Item';

const ItemList = ({ items, deleteItem, menuId, updateItem }) => (
  <Grid columns={3}>
    {
      items.map( i => 
        <Item 
          deleteItem={deleteItem}
          menuId={menuId}
          updateItem={updateItem}
          {...i}
        />
      )
    }
  </Grid>
)

export default ItemList;