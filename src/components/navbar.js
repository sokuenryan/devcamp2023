import React from 'react';
import About from './about';
import Contact from './contact';
import LogIn from './login';
import SignUp from './signup';

export default function Navbar() {

     return (
       <div className='navbar'>
        <About />
        <Contact /> 
        <LogIn /> 
        <SignUp />
       </div>
      );
   }