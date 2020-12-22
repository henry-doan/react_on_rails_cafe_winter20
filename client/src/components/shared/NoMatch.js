import { Link } from 'react-router-dom';

const NoMatch = () => (
  <>
    <h2>Error: 404 page not found</h2>
    <Link to='/'>
      return home here
    </Link>
  </>
)

export default NoMatch;