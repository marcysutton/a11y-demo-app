import React, { Component } from 'react';

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
        <form id="tripPlanner">
          <div>
            <div className="button-wrap left">
              <button type="button" title="My trips">
                <span className="offscreen">My trips</span>
                <i aria-hidden="true" className="fa fa-star"></i>
              </button>
            </div>
            <label className="fit">
              <span className="offscreen">Name of trip</span>
              <input type="text" placeholder="Name of trip" />
            </label>
            <label className="fit">
              <span className="offscreen">Name of ski area</span>
              <input type="text" placeholder="Name of ski area" />
            </label>
            <div className="button-wrap">
              <button type="button" className="expand" title="Expand">
                <span className="offscreen">Expand menu</span>
                <i aria-hidden="true" className="fa fa-caret-down"></i>
              </button>
            </div>
          </div>
          <div>
            <div className="inputGroup left">
              <button type="button" aria-label="Select a previous date">
                <i aria-hidden="true" className="fa fa-caret-left"></i>
              </button>
              <label>
                <span className="offscreen">Date of trip</span>
                <input type="text" placeholder="16.1.18" />
              </label>
              <button type="button" aria-label="Select a later date">
                <i aria-hidden="true" className="fa fa-caret-right"></i>
              </button>
            </div>
            <div className="button-wrap right">
              <button type="button" aria-label="Date picker">
                <i aria-hidden="true" className="fa fa-calendar"></i>
              </button>
            </div>
            <div className="select right">
              <label>
                <span className="offscreen">Type of trip</span>
                <select>
                  <option>Type of trip</option>
                  <option>Alpine ski resort</option>
                  <option>Backcountry</option>
                  <option>Nordic</option>
                </select>
              </label>
            </div>
            <div className="button-wrap right">
              <button className="submit">
                Go
              </button>
            </div>
          </div>
        </form>
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
