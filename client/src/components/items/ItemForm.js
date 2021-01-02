import { Component } from 'react';
import { Form } from 'semantic-ui-react';

class ItemForm extends Component {
  state = { item_name: '', price: 0.0, pic: '' }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { price } = this.state
    this.setState({ price: parseFloat(price)})
    const { addItem, menuId } = this.props
    addItem(menuId, this.state)
    this.setState({ item_name: '', price: 0.0, pic: '' })
  }

  render() {
    const { item_name, price, pic } = this.state 
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name='item_name'
          value={item_name}
          onChange={this.handleChange}
          required
          label='Item Name'
        />
        <Form.Input
          name='price'
          value={price}
          onChange={this.handleChange}
          required
          label='Price'
          type="number" 
          step="0.01"
        />
        <Form.Input
          name='pic'
          value={pic}
          onChange={this.handleChange}
          required
          label='Picture'
        />
        <Form.Button>
          Submit
        </Form.Button>
      </Form>
    )
  }
}

export default ItemForm;