import MenuForm from './MenuForm';
import MenuList from './MenuList';
import { MenuConsumer } from '../../providers/MenuProvider';

const Cafe = () => (
  <MenuConsumer>
    { value => (
      <>
        <h1>DPL Cafe</h1>
        <MenuForm addMenu={value.addMenu} />
        <MenuList menus={value.menus} />
      </>
    )}
  </MenuConsumer>
)

export default Cafe;