import { Component } from 'react';
import { Form } from 'semantic-ui-react';

class MenuForm extends Component {
  state = { title: '' }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addMenu(this.state)
    this.setState({ title: '' })
  }

  render() {
    const { title } = this.state 
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name='title' 
          value={title}
          onChange={this.handleChange}
          required
          label='Title'
        />
        <Form.Button>
          Submit
        </Form.Button>
      </Form>
    )
  }
}

export default MenuForm;