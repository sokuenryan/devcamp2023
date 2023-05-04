import React from 'react';

export default function Login() {
     return (
        <div className='btn-wrapper'>
            <button className='btn'><CustomLink href='/login'>Login</CustomLink></button>
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