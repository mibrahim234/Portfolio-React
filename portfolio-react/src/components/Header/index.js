// appears on multiple pages
// header/navbar
import React, {useState} from 'react';
import {Button} from './Button';
import './header.css'; 
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';

function Header() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if(window.innerWidth < 960) {
      setDropdown(false) 
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if(window.innerWidth < 960) {
      setDropdown(false) 
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
    <nav className='navBar'>
    <Link to="/"
    className='navbar-logo'>
      Mohammad Ibrahim
       </Link>

      <div className='menu-icon' onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
      </div>

      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
        <Link to="/" className='nav-links' onClick= {closeMobileMenu}>
          Home 
        </Link>
        </li>
        <li className='nav-item'>
        <Link to="/profile" className='nav-links' onClick= {closeMobileMenu}>
          About <i className= 'fas fa-caret-down' /> 
        </Link>
        {dropdown && <Dropdown /> }
        </li>
        <li className='nav-item'>
        <Link to="/contact" className='nav-links' onClick= {closeMobileMenu}>
          Contact 
        </Link>
        </li>
        <li className='nav-item'>
        <Link to="/resume" className='nav-links' onClick= {closeMobileMenu}>
          Resume 
        </Link>
        </li>
        <li className='nav-item'>
        <Link to="/sign-up" className='nav-links-mobile' onClick= {closeMobileMenu}>
          Sign Up
        </Link>
        </li>
        <Button />
      </ul>
    </nav>    
    </>
  )
}

export default Header;


   














// const Header = () => { 
 //  return (
//     <header className="bg-secondary mb-4 py-2 flex-row align-center">
//       <div className="container flex-row justify-space-between-lg justify-center align-center">
//         <Link to="/">
//           <h1 className='title1 mb-2 py-2'>Mohammad Ibrahim</h1>
//         </Link>

//         <nav className="text-center">
    
//               <button className='btn m-4'> <Link to="/profile">About Me</Link></button>
//               <button className='btn m-4 py-2'> <Link to="/companies">Portfolio</Link></button>
//               <button className='btn m-4 py-2'> <Link to="/developers">Contact</Link></button>
//               <button className='btn m-4 py-2'> <Link to="/developers">Resume</Link></button>          
//         </nav>
//       </div>
//     </header>
//   );
//  };

// export default Header;
