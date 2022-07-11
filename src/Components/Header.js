import '../header.css';
import { Link , Outlet} from 'react-router-dom'

function Header() {
  return (
    <div className='hero-section'>
      <h1>Hello React</h1>
      <nav>
        <Link to='Articles'>Articles</Link>
        <Link to='Contribute'>Contribute</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Header;
