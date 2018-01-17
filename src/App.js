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

Modal.setAppElement('#root');

let modalStyles = {
  overlay : {
    backgroundColor: 'rgba(68,68,68,.95)',
    zIndex : 1
  }
}
class App extends Component {
  isMenuOpen(state) {
    if (state.isOpen) {
      let item = ReactDOM.findDOMNode(this.refs.firstItem);
      setTimeout(function() {
        item.focus();
      }, 100);
    }
  }
  pageFocus(ref) {
    if (this[ref]) {
      this.setState({menuOpen: false});
      this[ref].focus();
    }
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
                  to="/"
                  ref="firstItem"
                  onClick={this.pageFocus.bind(this, 'main')}>
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
            <header id="header" className="App-header">
              <button
                className="signup-btn"
                onClick={this.showModal.bind(this)}
                aria-label="Subscribe to newsletter">
                <i className="fa fa-newspaper-o"></i>
              </button>
              <h1 className="App-title">ski trip organizer</h1>
            </header>
            <main id="main" ref={(node) => this.main = node} tabIndex="-1">
              <PropsRoute exact path="/" component={Home} onUpdate={this.onUpdate.bind(this)}/>
              <Route path="/gearlist" component={GearList}/>
            </main>
          </div>
          <Modal
            isOpen={this.state.modalOpen}
            contentLabel="Modal"
            className="modal"
            style={modalStyles}
          >
            <button 
              className="close-btn"
              onClick={this.onUpdate.bind(this, false)}
              aria-label="Close modal">
              X
            </button>
            {SignupForm}
          </Modal>
        </div>
      </Router>
    );
  }
}

export default App;
