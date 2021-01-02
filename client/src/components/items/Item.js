import { Component } from 'react';
import { Grid, Card, Image, Button, Modal } from 'semantic-ui-react';
import ItemForm from './ItemForm';

class Item extends Component {
  state = { open: false }

  setOpen = (val) => this.setState({ open: val })

  render() {
    const { deleteItem, menuId, id, pic, item_name, price } = this.props
    const { open } = this.state
    return (
      <Grid.Column>
        <Card>
          <Image src={pic} wrapped ui={false} size='medium' />
          <Card.Content>
            <Card.Header>{item_name}</Card.Header>
            <Card.Description>
              {price}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button icon='trash' color='red' onClick={() => deleteItem(menuId, id)} />
            <Modal
              onClose={() => this.setOpen(false)}
              onOpen={() => this.setOpen(true)}
              open={open}
              trigger={<Button icon='pencil' color='yellow' />}
            >
              <Modal.Header>Edit Menu Item</Modal.Header>
              <Modal.Content>
                <Modal.Description>
                  <ItemForm 
                    setOpen={this.setOpen}
                    {...this.props}
                  />
                </Modal.Description>
              </Modal.Content>
            </Modal>
          </Card.Content>
        </Card>
      </Grid.Column>
    )
  }
}

export default Item;