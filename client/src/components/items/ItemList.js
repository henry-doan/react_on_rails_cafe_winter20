import { Component } from 'react';
import { Grid, Card, Image, Button } from 'semantic-ui-react';

class ItemList extends Component {

  render() {
    const { items, deleteItem, menuId } = this.props
    return(
      <Grid columns={3}>
        {
          items.map( i => 
            <Grid.Column>
              <Card>
                <Image src={i.pic} wrapped ui={false} size='medium' />
                <Card.Content>
                  <Card.Header>{i.item_name}</Card.Header>
                  <Card.Description>
                    {i.price}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Button icon='trash' color='red' onClick={() => deleteItem(menuId, i.id)} />
                </Card.Content>
              </Card>
            </Grid.Column>
          )
        }
      </Grid>
    )
  }
}

export default ItemList;