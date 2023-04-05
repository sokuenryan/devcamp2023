import React, { Component } from 'react';

import Icons from './icons';

import HomeHeading from './home-header';
import HomeBody from './home-body';
import HomeFooter from './home-footer';

export default class App extends Component {
 constructor(props) {
   super(props);
            
   Icons();
 }


  render() {
    return (
      <div className='app'>
        <HomeHeading />
        <HomeBody />
        <HomeFooter />
      </div>
    );
  }
}
