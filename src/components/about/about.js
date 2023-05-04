import React  from 'react';

export default function About() {

    function CustomLink({ href, children, ...props }) {
        const path = window.location.pathname 
        return (
            <div className={path === href ? "active" : ""}>
                <a href={href} {...props}>{children}</a>
             </div>
        )
    }
    
    return (
        <div className='btn-wrapper'>
            <button className='btn'>
                <CustomLink href='/about'>About</CustomLink>
            </button>
        </div>
    );
}

