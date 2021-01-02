import { Component } from 'react';
import { Grid, Card, Image } from 'semantic-ui-react';

class ItemList extends Component {

  render() {
    const { items } = this.props
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
                  <a>
                    22 Friends
                  </a>
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