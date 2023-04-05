import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Footer extends Component {
   render() {
     return (
    <div className='home-footer'>
        <div className='footer-title'>
            <h1>Join our Community!</h1>
        </div>
            
        <div className='footer-links'>
        <FontAwesomeIcon icon="sign-out-alt" />
        </div>
    </div>
      );
     }
   }
