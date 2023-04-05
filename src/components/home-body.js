import React, { Component } from 'react';

import Carousel, { CarouselItem } from './carousel.js';
import Welcome from './welcome.js'

export default class HomeBody extends Component {
   render() {
     return (
       <div className='home-body'>
        <Carousel>
          <CarouselItem>
            <img src='../assets/images/entertainment.jpg'></img>
            <h1>Entertainment</h1>
          </CarouselItem>

          <CarouselItem>
            <img src='../assets/images/entrepreneurship.jpg'></img>
            <h1>Entrepreneurship</h1>
          </CarouselItem>

          <CarouselItem>
            <img src='../assets/images/growth.jpg'></img>
            <h1>Growth</h1>
          </CarouselItem>

          <CarouselItem>
            <img src='../assets/images/nutrition.jpg'></img>
            <h1>Nutrition</h1>
          </CarouselItem>

          <CarouselItem>
            <img src='../assets/images/science.jpg'></img>
            <h1>Science</h1>
          </CarouselItem>

          <CarouselItem>
            <img src='../assets/images/sustainability.jpg'></img>
            <h1>Sustainability</h1>
          </CarouselItem>

          <CarouselItem>
            <img src='../assets/images/technology.jpg'></img>
            <h1>Technology</h1>
          </CarouselItem>

          <CarouselItem>
            <img src='../assets/images/travel.jpg'></img>
            <h1>Travel</h1>
          </CarouselItem>

          <CarouselItem>
          <img src='../assets/images/wellness.jpg'></img>
          <h1>Wellness</h1>
          </CarouselItem>
        </Carousel>

        <Welcome />
       </div>
      );
     }
   }