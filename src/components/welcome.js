import React from 'react';

export default function Welcome() {
    return (
      <div className='welcome-text-wrapper'>
          <div className='welcome-text-top'>
            <h1>Welcome to Bloggr!</h1> 

            <p>Blogger is a open source platform where you can create, upload, and promote 
                your blogs and share them with other fellow bloggrs. It's an all inclusive space, so please try to keep
                it, safe, open, and positive where business can shine and collaboration can profit and thrive! 
                See you inside!
            </p>
          </div>

          <div className='welcome-text-bottom'>
            <h1>Bloggr Space vs Bloggr Sphere</h1>

            <p>Bloggr has two endzones. Each memeber of Bloggr is given there own Bloggr Space is where you can create, upload, edit, and publish you sites.
              We have proudly partnered with WordPress, and Wix so you can find a link to them there as well. 
              The Bloggrs Sphere is a social environment where you can find like minded businesses, entrepreneurs, and other fellow bloggrs.  
              The goal of the Bloggrs Sphere is to help bloggrs drive traffic, gain affiliates, and increase clientele. It's also a place to find inspiration and see what
              others have to offer.
              You can find additional media sites on the social platforms below.
            </p>
          </div>
       </div>
      );
   }