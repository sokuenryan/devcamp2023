import React from 'react';

export default function SignUp() {
     return (
        <div className='btn-wrapper'>
            <button className='btn'><CustomLink href='/signup'>Sign Up</CustomLink></button>
        </div>
      );
   }

function CustomLink({ href, children, ...props }) {
    const path = window.location.pathname 
    return (
        <div className={path === href ? "active" : ""}>
            <a href={href} {...props}>{children}</a>
         </div>
    )
}