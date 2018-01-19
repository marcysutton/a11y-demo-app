import React, { Component } from 'react';
import ShadowDOM from 'react-shadow';

class TripPlanner extends Component {
  render() {
    return (
      <trip-planner>
        <ShadowDOM include={[
          'css/normalize.css',
          '/fonts/font-awesome-4.2.0/css/font-awesome.min.css',
          '/css/trip-planner.css']
        }>
          <div>
            <form>
              <div>
                <div className="button-wrap left">
                  <button type="button" title="My trips">
                    <span class="visuallyhidden">My trips</span>
                    <i className="fa fa-star"></i>
                  </button>
                </div>
                <label className="fit">
                  <span class="visuallyhidden">Name of trip</span>
                  <input type="text" placeholder="Name of trip" />
                </label>
                <label className="fit">
                  <span class="visuallyhidden">Name of ski area</span>
                  <input type="text" placeholder="Name of ski area" />
                </label>
                <div className="button-wrap">
                  <button type="button" className="expand" title="Expand">
                    <span class="visuallyhidden">Expand widget</span>
                    <i className="fa fa-caret-down"></i>
                  </button>
                </div>
              </div>
              <div>
                <div className="inputGroup left">
                  <button type="button" aria-label="Select a previous date">
                    <i className="fa fa-caret-left"></i>
                  </button>
                  <label>
                    <span class="visuallyhidden">Date of trip</span>
                    <input type="text" placeholder="16.1.18" />
                  </label>
                  <button type="button" aria-label="Select a later date">
                    <i className="fa fa-caret-right"></i>
                  </button>
                </div>
                <div className="button-wrap right">
                  <button type="button" aria-label="Date picker">
                    <i className="fa fa-calendar"></i>
                  </button>
                </div>
                <div className="select right">
                  <label>
                    <span class="visuallyhidden">type of trip</span>
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
          </div>
        </ShadowDOM>
      </trip-planner>
    )
  }
}
export default TripPlanner;
