import {Link} from 'react-router-dom';

function Navigation() {
    return (
      <div className="navbar">
        <Link to='/' className='nav-brand'>Deena Design</Link>
        <Link to='/services' className='nav-link'>Sluzby</Link>
        <Link to='/portfolio' className='nav-link'>Portfolio</Link>
        <Link to='/references' className='nav-link'>Reference</Link>
        <Link to='/about' className='nav-link'>O nas</Link>
        <Link to='/contact' className='nav-link-meeting'>Sjednat schuzku</Link>
      </div>
    );
}
  
export default Navigation;