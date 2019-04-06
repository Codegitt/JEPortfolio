import React from 'react';
import {Link,NavLink, withRouter} from 'react-router-dom';
import './Navbar.css';

const Navbar = (props) => {

    return(
        <header>
        <nav className='nav-wrapper transparent'>
            <div className='container'>
              <NavLink to='/' className='brand-logo'>J.E. Portfolio</NavLink> 
              <a href="" class="sidenav-trigger" data-target='mobile-menu' >
              <i className="material-icons">menu</i>
              </a>

                <ul className='right'>
                    <li><NavLink to='/'> Home </NavLink></li>  
                    <li><NavLink to='/App1'> App1 </NavLink></li>  
                    <li><NavLink to='/App2'> App2 </NavLink></li>
                    <li><NavLink to='/App3'> App3 </NavLink></li>
                    <li><NavLink to='/App4'> App4 </NavLink></li>
                </ul>

                <ul class='sidenav grey lighten-2' id='mobile-menu' > 
                    <li><NavLink to='/'> Home </NavLink></li>  
                    <li><NavLink to='/App1'> App1 </NavLink></li>  
                    <li><NavLink to='/App2'> App2 </NavLink></li>
                    <li><NavLink to='/App3'> App3 </NavLink></li>
                    <li><NavLink to='/App4'> App4 </NavLink></li>
                </ul>
            </div>
        </nav>       
        </header>  
    )
}

export default withRouter(Navbar);  