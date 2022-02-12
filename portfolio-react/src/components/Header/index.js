// appears on multiple pages
// header/navbar
import React, {useState} from 'react';
// import {Button} from './Button';
import styles from './header.module.css'; 
import { Link } from 'react-router-dom';
// import Dropdown from './Dropdown';

function Header() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

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
