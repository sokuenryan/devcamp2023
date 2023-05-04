import React from 'react';
import About from '../about/about';
import Contact from '../contact/contact';
import LogIn from '../login/login';
import SignUp from '../signup/signup';


function Navbar() {
     return (
       <div className='navbar'>
          <About />
          <Contact />
          <LogIn />
          <SignUp /> 
       </div>
      );
   }

   export default Navbar;