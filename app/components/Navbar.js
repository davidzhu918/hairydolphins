import React from 'react';
import {Link} from 'react-router';
import NavbarStore from '../stores/NavbarStore';
import NavbarActions from '../actions/NavbarActions';

class Navbar extends React.Component {

  render() {
    return (
      <nav className='navbar navbar-default navbar-static-top'>
        <div className='navbar-header'>
          <Link to='/' className='navbar-brand'>
            hairydolphins
          </Link>
        </div>
        <div id='navbar' className='navbar-collapse collapse'>
          <ul className='nav navbar-nav'>
            <li><Link to='/'>Become a guide</Link></li>
            <li><Link to='/signin'>Sign in</Link></li>
            <li><Link to='/signup'>Sign up</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;