import React, { Component } from 'react';

import Carousel, { CarouselItem } from './carousel.js';
import Welcome from './welcome.js'

export default class HomeBody extends Component {
   render() {
     return (
       <div className='home-body'>
        <Carousel>
          <CarouselItem>
            <img src='../assets/images/baseball.jpg'></img>
            <h1>Baseball</h1>
          </CarouselItem>

          <CarouselItem>
            <img src='../assets/images/basketball.jpg'></img>
            <h1>Basketball</h1>
          </CarouselItem>

          <CarouselItem>
            <img src='../assets/images/football.jpg'></img>
            <h1>Football</h1>
          </CarouselItem>

          <CarouselItem>
            <img src='../assets/images/soccer.jpg'></img>
            <h1>Soccer</h1>
          </CarouselItem>

          <CarouselItem>
            <img src='../assets/images/hockey.jpg'></img>
            <h1>Hockey</h1>
          </CarouselItem>
        </Carousel>

        <Welcome />
       </div>
      );
     }
   }