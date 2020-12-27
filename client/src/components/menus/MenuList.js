import { List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const MenuList = ({ menus }) => (
  <List divided relaxed>
    { menus.map( m => 
      <List.Item>
        <List.Icon name='food' size='large' verticalAlign='middle' />
        <List.Content>
          <List.Header>
            <Link to={`/menu/${m.id}`}>
              {m.title}
            </Link>
          </List.Header>
          <List.Description as='a'>{m.updated_at}</List.Description>
        </List.Content>
      </List.Item>
    )}
  </List>
)

export default MenuList;