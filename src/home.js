import React, { Component } from 'react';
import TripPlanner from './trip-planner.js';

const images = {
  kuhtai: require('./images/kuhtai.jpg'),
  kittenMittens: require('./images/kitten-mittens.jpg'),
  bachelor: require('./images/mtbachelor.jpg'),
  lb: require('./images/lb.jpg'),
  baker: require('./images/IMG_0663.JPG')
}
class Home extends Component {
  render() {
    return (
      <div className="homepage">
        <TripPlanner />
        <div className="gallery">
          <h2>Gallery</h2>
          <div>
            <figure><img src={images.kuhtai} alt="Snowy mountains in Austria" /></figure>
            <figure><img src={images.lb} alt="Young girl on skis" /></figure>
            <figure><img src={images.bachelor} alt="Snowy chairlifts at Mt. Bachelor" /></figure>
          </div>
          <div>
            <figure><img src={images.baker} alt="Skier and snowboarder on a snowy blue sky day" /></figure>
            <figure><img src={images.kittenMittens} alt="Mittens with cats on them and a purple helmet with goggles" /></figure>
          </div>
        </div>
      </div>
    )
  }
}
export default Home;
