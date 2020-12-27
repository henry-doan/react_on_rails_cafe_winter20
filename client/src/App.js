import { Route, Switch } from 'react-router-dom';
import Home from './components/shared/Home';
import About from './components/shared/About';
import NoMatch from './components/shared/NoMatch';
import Navbar from './components/shared/Navbar';
import Cafe from './components/menus/Cafe';
import Menu from './components/menus/Menu';

const App = () => (
  <>
    <Navbar />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/cafe' component={Cafe} />
      <Route exact path='/menu/:id' component={Menu} />
      <Route component={NoMatch} />
    </Switch>
  </>
)

export default App;