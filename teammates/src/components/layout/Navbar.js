import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    //properties ---------------------
    //hooks ---------------------
    //context ---------------------
    //methods ---------------------
    //view ---------------------
    return (

        <nav>
            <div className='navItem'>
                <NavLink to={'/'} exact activeClassName='navSelected'>Home</NavLink>
            </div>

            <div className='navItem'>
                <NavLink to={'/signin'} activeClassName='navSelected'>Sign In</NavLink>
            </div>

            <div className='navItem'>
            <NavLink to={'/contact'} activeClassName='navSelected'>Contact</NavLink>
            </div>

            <div className='navItem'>
            <NavLink to={'/myprofile'} activeClassName='navSelected'>My Profile</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;