import React from 'react';

import HomeHeading from './home-header';
import HomeBody from './home-body';
import Footer from '../footer';

function Home() {
    return (
      <div className='home'>
        <HomeHeading />
        <HomeBody/>
        <Footer />
      </div>
    );
  }

  export default Home;