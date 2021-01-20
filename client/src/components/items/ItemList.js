import { Grid } from 'semantic-ui-react';
import Item from './Item';
import { Fade } from 'react-reveal';

const ItemList = ({ items, deleteItem, menuId, updateItem }) => (
  <Fade bottom cascade>
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
  </Fade>
)

export default ItemList;