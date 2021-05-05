import React from 'react';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import './styles.scss';
import { auth } from '../../firebase/utils';

const Header = (props) => {
   const { currentUser } = props;

   return (
      <header className='header'>
         <div className='wrap'>
            <div className='logo'>
               <Link to='/'>
                  <img src={Logo} alt='App Logo' />
               </Link>
            </div>
            <div className='callToActions'>
               {currentUser && (
                  <ul>
                     <li>
                        <span onClick={() => auth.signOut()}>Logout</span>
                     </li>
                  </ul>
               )}

               {!currentUser && (
                  <ul>
                     <li>
                        <Link to='/registration'>Register</Link>
                     </li>
                     <li>
                        <Link to='/login'>Login</Link>
                     </li>
                  </ul>
               )}
            </div>
         </div>
      </header>
   );
};

export default Header;
