import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './App.css';
import { PropsRoute } from './utils.js';

// Views
import Home from './home.js';
import SignupForm from './signup-form.js';
import Menu from './menu.js';
import GearList from './gearlist.js';

let modalStyles = {
  overlay : {
    backgroundColor: 'rgba(68,68,68,.95)',
    zIndex : 1
  }
}
class App extends Component {
  isMenuOpen(state) {
    return state.isOpen;
  }
  constructor (props) {
    super(props)
    this.state = { modalOpen: false, menuOpen: false }
  }
  onUpdate(modalOpen) {
    this.setState({modalOpen});
  }
  showModal() {
    this.onUpdate(true)
  }
  render() {
    return (
      <Router>
        <div className="App">
          <div className="menu-wrap">
            <Menu
              isOpen={this.state.menuOpen}
              onStateChange={ this.isMenuOpen.bind(this) }>
              <ul>
                <li><Link 
                  to="/">
                    <i className="fa fa-fw fa-home" />
                    <span>Home</span>
                </Link></li>
                <li><Link to="/gearlist">
                    <i className="fa fa-fw fa-suitcase" />
                    <span>Gear Packing List</span>
                </Link></li>
                <li><Link to="/trips">
                    <i className="fa fa-fw fa-plane" />
                    <span>Trip Suggestions</span>
                </Link></li>
                <li><Link to="/inspiration">
                    <i className="fa fa-fw fa-star" />
                    <span>Inspiration</span>
                </Link></li>
                <li><Link to="/about">
                    <i className="fa fa-fw fa-question-circle" />
                    <span>About</span>
                </Link></li>
              </ul>
            </Menu>
          </div>
          <div className="primary">
            <div id="header" className="App-header">
              <button
                className="signup-btn"
                onClick={this.showModal.bind(this)}>
                <i className="fa fa-newspaper-o"></i>
              </button>
              <h1 className="App-title">ski trip organizer</h1>
            </div>
            <div id="main">
              <PropsRoute exact path="/" component={Home} onUpdate={this.onUpdate.bind(this)}/>
              <Route path="/gearlist" component={GearList}/>
            </div>
          </div>
          <Modal
            isOpen={this.state.modalOpen}
            contentLabel="Modal"
            className="modal"
            style={modalStyles}
          >
            <div 
              className="close-btn"
              onClick={this.onUpdate.bind(this, false)}>
              X
            </div>
            {SignupForm}
          </Modal>
        </div>
      </Router>
    );
  }
}

export default App;
